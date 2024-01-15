'use client';

import React, { createContext, useContext, useReducer } from 'react';
import { ICustomer, CustomerDefaults } from '@/types/profiles';

export enum operations {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  CHECK = 'CHECK',
}

interface ICredentials {
  email: string;
  password: string;
}
interface IPayload {
  type: string;
  payload?: IState | unknown;
}
type IState = {
  jwt: string | null;
  user: ICustomer;
  loggedIn?: boolean;
};

const DEFAULT_STATE: IState = {
  jwt: null,
  user: CustomerDefaults,
  loggedIn: false,
};

function reducer(state: IState, action: IPayload): IState {
  switch (action.type.toUpperCase()) {
    case 'LOGIN':
      let { jwt } = action.payload as IState;
      let loginOK = false;
      if (jwt !== null) {
        localStorage.setItem('jwt', jwt as string);
        //                localStorage.setItem('userData', JSON.stringify(user) );
        loginOK = true;
      }
      return { ...state, jwt, loggedIn: loginOK };
    case 'LOGOUT':
      localStorage.removeItem('jwt');
      localStorage.removeItem('userData');
      return DEFAULT_STATE;
    case 'CHECK':
      const JWT = localStorage.getItem('jwt');
      if (JWT != null) {
        const USER: ICustomer = JSON.parse(
          localStorage.getItem('userData') as string
        );
        return { ...state, jwt: JWT, user: USER, loggedIn: true };
      } else {
        return DEFAULT_STATE;
      }
    default:
      return state;
  }
}

export const userStateContext = createContext(DEFAULT_STATE);
export const userDispatchContext = createContext<React.Dispatch<IPayload>>(
  () => {}
);

/*
export const useAuth = () => {

    const [state, dispatcher] = useReducer(reducer, DEFAULT_STATE);
    const isAuthenticated = state.loggedIn && Object.keys(state.user).length
    const login = (credentials: ICredentials) => new Promise(async (resolve, reject) => {
        try {
            const jwt: string = ( await getLoginToken(credentials) ).access_token // returns token
            const user: ICustomer = { ...( await getMyProfile(jwt) ).customer }       // returns profile
            const payload: IState = {jwt, user}
            dispatcher({ type: 'LOGIN', payload })
            resolve(payload)
        } catch (e) {
            console.error(e)
            reject(e)
        }
    })
    const logout = () => {
        dispatcher({ type: 'LOGOUT' })
    }
    return { state, isAuthenticated, login, logout }
}
*/

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  return (
    <userStateContext.Provider value={state}>
      <userDispatchContext.Provider value={dispatch}>
        {children}
      </userDispatchContext.Provider>
    </userStateContext.Provider>
  );
};

export default AuthProvider;
