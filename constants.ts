// Supabase configuration
// Since this is a static deployment (GitHub Pages), we hardcode the keys provided.
// We removed 'process.env' references to prevent runtime errors in the browser.

export const SUPABASE_URL = 'https://lohkwsuebmgscgmwvyqv.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvaGt3c3VlYm1nc2NnbXd2eXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNzk0MzksImV4cCI6MjA3OTg1NTQzOX0.D5ZNvCsqTZRXu0EpkM8BiIvX2V-PzjK0uVur6KERfhk';

export const COLORS = {
  hover: '#ffa500',
  createRoom: '#800080',
  joinManager: '#ffff00',
  enterRoom: '#008000',
  close: '#ff0000',
  listHost: '#0000ff',
  listManager: '#ff0000',
  listContestant: '#008000',
  playBtn: '#ff00cc',
  playActive: '#008000',
  videoBtn: '#0000ff',
  ratioBtn: '#ffff00',
};