import axios from 'axios';

// Aclaration: Setted for default for an easy repository instalation.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.vatcomply.com',
});

export default api;
