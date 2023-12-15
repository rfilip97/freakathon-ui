const initialState = {
  firstName: '',
  lastName: ''
};

function userReducer(state = initialState, action) {
  switch (action.type) {
      case 'SET_USER_DETAILS':
          return {
              ...state,
              firstName: action.payload.firstName,
              lastName: action.payload.lastName
          };
      default:
          return state;
  }
}

export default userReducer;
