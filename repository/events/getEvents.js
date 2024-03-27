import apiCall from '../api';

const getEvents = async (token) => {
  return apiCall('api/events', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'session-token': token
    },
  });
};

export default getEvents;