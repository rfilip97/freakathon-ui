import apiCall from '../api';

const register = async ({ username, password, passwordConfirm, name, email }) => {
  console.log('username ' + username)
  console.log('password ' + password)
  console.log('passw confirm ' + passwordConfirm)
  console.log('name ' + name)
  console.log('email ' + email)
  return apiCall('api/collections/users/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, passwordConfirm, name, email }),
  });
};

export default register ;