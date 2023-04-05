// hooks
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const updatedUser = { userName: 'Daya' };
    setUser(updatedUser);
  };

  const valueToShare = { user };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthProvider };
