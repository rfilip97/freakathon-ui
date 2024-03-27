import apiCall from '../api';

const register = async ({ username, password, passwordConfirm, name, email }) => {
  return apiCall('api/collections/users/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, passwordConfirm, name, email }),
  });
};

export default register ;