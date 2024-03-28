import apiCall from '../api';

const acceptFriendRequest = async (token, friendId) => {
  const url = `api/friends/${friendId}`;

  return apiCall(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'session-token': token
    }
  });
};

export default acceptFriendRequest;