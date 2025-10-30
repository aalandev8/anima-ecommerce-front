import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common error scenarios
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          localStorage.removeItem('authToken');
          window.location.href = '/login';
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Server error');
          break;
        default:
          console.error('API Error:', error.response.data);
      }
    } else if (error.request) {
      console.error('Network error - no response received');
    } else {
      console.error('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
