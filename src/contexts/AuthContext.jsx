// features/auth/context/AuthContext.jsx
import { createContext, useContext, useEffect } from 'react';
import { useAuthViewModel } from '@viewmodel/useAuthViewModel';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useAuthViewModel();

  useEffect(() => {
    auth.loadUser(); // check session on app load
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
