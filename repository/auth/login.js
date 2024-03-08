import apiCall from '../api';

const login = async (identity, password) => {
  return apiCall('api/collections/users/auth-with-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identity, password }),
  });
};

export default login;