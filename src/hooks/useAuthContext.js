// react hooks
import { useContext } from 'react';

// context
import AuthContext from '../context/auth/AuthContext';

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
