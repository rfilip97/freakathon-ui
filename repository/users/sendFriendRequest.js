import apiCall from '../api';

const sendFriendRequest = async (token, friendId) => {
  const url = `api/friends/${friendId}`;

  return apiCall(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'session-token': token
    }
  });
};

export default sendFriendRequest;