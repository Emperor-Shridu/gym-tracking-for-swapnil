// Configuration for the gym tracker app

// Google Sheet CSV URL for reading workout data
// (use the published-to-web CSV endpoint; if Google regenerates the link, paste the new one here)
const SHEETS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRND14LvcqFYY2f6z6ozHDwg-WwlvAlYLSXHAcGdiW9v3vAZZcqT5nRTWmnEmGuCziqr7gtGohRapqb/pub?gid=0&single=true&output=csv';

// Google Apps Script URL for logging workouts
// Deploy GOOGLE_APPS_SCRIPT.gs as a Web App (doPost, Execute as you, Anyone) and paste the deployment URL here.
// Also set APPS_SCRIPT_URL in your Vercel environment variables for production.
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtYM_NbXMvi-saIeqCg-zgX7vumuh18baeDWczjfdWgHRneTWUpms5tesGJOasAYu9PA/exec';

// Color theme
const THEME = {
  bg: '#0f0f13',
  accent: '#4a9eff',
  accentDark: '#2a7cd9',
  text: '#ffffff',
  textSecondary: '#b0b0b0',
  cardBg: '#1a1a20',
  borderColor: '#2a2a2f',
  success: '#00ff88',
  danger: '#ff4444',
  warning: '#ffaa00'
};

