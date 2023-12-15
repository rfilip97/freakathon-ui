export const setUserDetails = (firstName, lastName) => ({
  type: 'SET_USER_DETAILS',
  payload: { firstName, lastName },
});
