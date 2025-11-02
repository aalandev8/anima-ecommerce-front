import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '@/redux/slices/authSlice';
import { authAPI } from '@/api/auth';

/**
 * AuthProvider - Validates stored token on app initialization
 * Ensures that the session is valid when the app loads
 */
const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const validateToken = async () => {
      // Only validate if we have a token but want to ensure it's valid
      if (token && isAuthenticated) {
        try {
          // Verify token with backend
          const data = await authAPI.getCurrentUser(token);

          // Update user data if token is valid
          dispatch(loginSuccess({
            user: data.data.user,
            token: token,
          }));
        } catch (error) {
          // Token is invalid or expired, clear session
          console.error('Token validation failed:', error);
          dispatch(logout());
        }
      }
    };

    validateToken();
  }, []); // Run only once on mount

  return children;
};

export default AuthProvider;
