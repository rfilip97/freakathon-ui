import apiCall from '../api';

const joinEvent = async (token, eventId) => {
  const url = `api/events/${eventId}`;

  return apiCall(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'session-token': token
    }
  });
};

export default joinEvent;