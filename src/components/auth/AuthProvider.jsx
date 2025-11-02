import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '@/redux/slices/authSlice';
import { authAPI } from '@/api/auth';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);  

  useEffect(() => {
    const validateToken = async () => {
      if (token && !user) {  
        try {
          
          const data = await authAPI.getCurrentUser(token);

          
          dispatch(loginSuccess({
            user: data.data.user,
            token: token,
          }));
        } catch (error) {
      
          console.error('Token validation failed:', error);
          dispatch(logout());
        }
      }
    };

    validateToken();
  }, [token, user, dispatch]); 

  return children;
};

export default AuthProvider;