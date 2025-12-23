// features/auth/viewmodel/useAuthViewModel.js
import { useState } from 'react';
import { loginApi, meApi, logoutApi, registerApi } from '../model/authApi';


export function useAuthViewModel() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //const navigate = useNavigate();

  const register = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await registerApi({
        email: data.email,
        password: data.password,
        firstName: data.firstname,
        lastName: data.lastname,
        region: data.region,
        province: data.province
      });

      //navigate('/verify-email'); // 🔥 IMPORTANT
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      const res = await loginApi(email, password);

      // If mobile, grab the access token from JSON and set it for future requests
      if (res.data.access_token) {
        setAuthToken(res.data.access_token);
      }

      const meRes = await meApi();
      setUser(meRes.data.user);

      return { success: true };
    } catch (err) {
      const status = err.response?.status;

      if (status === 403) {
        setError('Email not verified');
        return { success: false, reason: 'NOT_VERIFIED' };
      }

      setError(err.response?.data?.error || 'Login failed');
      return { success: false };
    } finally {
      setLoading(false);
    }
  };



  const loadUser = async () => {
    try {
      const res = await meApi();
      setUser(res.data.user);
    } catch {
      setUser(null);
    }
  };

  const logout = async () => {
    await logoutApi();
    setUser(null);
  };

  return { user, register, login, logout, loadUser, loading, error };
}
