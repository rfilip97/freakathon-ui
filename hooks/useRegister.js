import { useState } from 'react';
import { Repository } from '../repository';

const AuthStates = {
  NOT_REGISTERED: 'NOT_REGISTERED',
  REGISTERED: 'REGISTERED',
  LOADING: 'LOADING',
  ERROR: 'ERROR'
};

function useRegister(onSuccess) {
  const [authState, setAuthState] = useState(AuthStates.NOT_REGISTERE);

  const register = async (username, password, passwordConfirm, name, email) => {
    setAuthState(AuthStates.LOADING);
    try {
      await Repository.register(username, password, passwordConfirm, name, email);
      setAuthState(AuthStates.REGISTERED);
      onSuccess();
    } catch (error) {
      console.log('RegisterFailed:', error);
      setAuthState(AuthStates.ERROR);
    }
  };

  return [authState, register];
}

export { useRegister, AuthStates };
