import { api } from '../../services/api';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await api.post('/auth/login', credentials); 
    const { token } = response.data;

    localStorage.setItem('token', token); 
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message);
    throw error;
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token'); 
  dispatch({ type: LOGOUT });
};
