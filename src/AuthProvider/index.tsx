import { createContext, useState } from 'react';
import { loginRequest } from '../services/authService';
import { IAuthProvider, IContext } from '../types/login';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [token, setToken] = useState<string>();

  async function authenticate(email: string, password: string) {
    const response = await loginRequest({ email, password });
    /**
     *
     * We should also gracefully handle the login failure here
     * so user knows what went is wrong with the login
     * It can be done both on FE and BE,
     *
     * 1) BE sending pretty Message that can be displayed directly to user
     *  or
     * 2) Let BE give the error code and map the message on the FE
     *
     * Either case user should know the next steps
     *
     */
    setToken(response.token);
  }

  function logout() {
    /**
     * This token can also be set on session storage to
     * access across the app or in other micro frontend applications modules
     * I would prefer to have a empty string over null and undefined as it again stored as
     * string in session storage
     * */
    setToken('');
  }
  /***
   *
   * We can also having styling context, preference context,
   * analytics context, error loading application context here to further enhance
   * (Not particularly here though, may in AppLayout or in Router)
   */

  return (
    <AuthContext.Provider value={{ token, authenticate, logout }}>{children}</AuthContext.Provider>
  );
};
