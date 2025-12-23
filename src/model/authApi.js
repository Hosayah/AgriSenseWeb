// features/auth/model/authApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://seriate-calorifically-ray.ngrok-free.dev/auth/v1',
  withCredentials: true, // 🔥 REQUIRED for HTTP-only cookies
  headers: {
    'ngrok-skip-browser-warning': 'true'
  }
});

// Helper to attach token for mobile
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers['Authorization'];
  }
};

export const registerApi = (payload) =>
  api.post('/register', payload);

export const loginApi = (email, password) =>
  api.post('/login', { email, password });

export const meApi = () =>
  api.get('/me');

export const logoutApi = () =>
  api.post('/logout');

export default api;
