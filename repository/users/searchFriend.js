import apiCall from '../api';

const searchFriend = async (token, friendId) => {
  const url = `api/search/${friendId}`;

  return apiCall(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'session-token': token
    }
  });
};

export default searchFriend;