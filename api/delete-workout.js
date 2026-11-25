/**
 * Vercel Serverless Function: Delete Workout
 * POSTs delete request to Google Apps Script Web App
 *
 * Environment Variables needed in Vercel:
 * - APPS_SCRIPT_URL: URL of deployed Google Apps Script Web App
 *
 * Expected body:
 * {
 *   date: "DD/MM/YYYY",
 *   exercise: "Exercise Name" (optional - if omitted, deletes entire session)
 * }
 */

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { date, exercise } = req.body;

    // Validate
    if (!date) {
      return res.status(400).json({ error: 'Missing date' });
    }

    // Send to Google Apps Script
    const appsScriptUrl = process.env.APPS_SCRIPT_URL;
    if (!appsScriptUrl) {
      return res.status(500).json({
        error: 'APPS_SCRIPT_URL not configured',
        message: 'Please add APPS_SCRIPT_URL to Vercel environment variables'
      });
    }

    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'deleteWorkout',
        date: date,
        exercise: exercise || ''
      })
    });

    if (!response.ok) {
      console.error(`Apps Script error: ${response.status}`);
      return res.status(500).json({
        error: 'Failed to delete from Google Sheets',
        status: response.status
      });
    }

    const result = await response.json();

    return res.status(200).json({
      success: true,
      message: result.message,
      result: result
    });
  } catch (error) {
    console.error('Error in delete-workout:', error);
    return res.status(500).json({
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}