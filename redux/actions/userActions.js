export const SET_USER_DETAILS = 'SET_USER_DETAILS';

export const setUserDetails = (data) => {
  const { record, token } = data;
  const userDetails = {
    id: record.id,
    name: record.name,
    username: record.username,
    email: record.email,
    avatar: record.avatar,
    tag: record.tag,
    token: token
  };

  return {
    type: SET_USER_DETAILS,
    payload: userDetails,
  };
};
