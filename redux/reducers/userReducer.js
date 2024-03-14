import { SET_USER_DETAILS } from "../actions/userActions";

const initialState = {
  id: '',
  name: '',
  username: '',
  email: '',
  avatar: '',
  tag: '',
  token: ''
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default userReducer;
