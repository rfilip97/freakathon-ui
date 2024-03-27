const BASE_URL = 'http://0.0.0.0:8090';

async function apiCall(endpoint, options) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);
    if (response && !response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const text = await response.text();
    return text ? JSON.parse(text) : {};
  } catch (error) {
    throw error;
  }
}

export default apiCall;
