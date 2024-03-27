import apiCall from '../api';

const createEvent = async (token, params) => {
console.log()

  return apiCall('api/collections/events/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'session-token': token,
    },
    body: JSON.stringify(params) 
  });
};

export default createEvent;