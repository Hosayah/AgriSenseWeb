import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://127.0.0.1:5000/api/crop-trend',
  withCredentials: true,
  headers: {
    'ngrok-skip-browser-warning': 'true'
  }
});

export const analyticsSummaryApi = (params) =>
  api.get('/analytics/summary', { params });

export const analyticsTrendApi = (params) =>
  api.get('/analytics/trend', { params });

export const analyticsRiskApi = (params) =>
  api.get('/analytics/risk-distribution', { params });

export default api;
