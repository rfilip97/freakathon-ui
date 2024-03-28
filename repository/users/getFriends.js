import apiCall from '../api';

const getFriends = async (token, myId) => {
  const url = `api/collections/friends/records?filter=(user_id='${myId}')`;

  return apiCall(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'session-token': token
    }
  });
};

export default getFriends;