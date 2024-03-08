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
      await Repository.login(identity, password);
      setAuthState(AuthStates.LOGGED);
      onSuccess();
    } catch (error) {
      console.log('Login Failed:', error);
      setAuthState(AuthStates.DENIED);
    }
  };

  return [authState, login];
}

export { useLogin, AuthStates };
