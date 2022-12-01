import { createContext, useContext } from 'react';


export const ApplicationContext = createContext({ isLoggedIn: false , setIsLoggedIn: null });
export const useApplicationContextState = () => useContext(ApplicationContext);