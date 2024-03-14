import { useState } from 'react';
import { Repository } from '../repository';

const AuthStates = {
  NOT_LOGGED: 'NOT_LOGGED',
  LOGGED: 'LOGGED',
  LOADING: 'LOADING',
  DENIED: 'DENIED',
};

function useLogin(onSuccess) {
  const [authState, setAuthState] = useState(AuthStates.NOT_LOGGED);

  const login = async (identity, password) => {
    setAuthState(AuthStates.LOADING);
    try {
      const data = await Repository.login(identity, password);
      if (data.token) {
        setAuthState(AuthStates.LOGGED);
        onSuccess(data);
      } else {
        console.error('Login succeeded but no token received.');
        setAuthState(AuthStates.DENIED);
      }
    } catch (error) {
      console.log('Login Failed:', error);
      setAuthState(AuthStates.DENIED);
    }
  };

  return [authState, login];
}

export { useLogin, AuthStates };
