import { ApplicationContext } from './context';
import { useState } from 'react';
import App from './App';

export const AppPage = () => {

    const[loggedIn, setLoggedIn] = useState(false);


    return (  
    <ApplicationContext.Provider value={{ isLoggedIn: loggedIn , setIsLoggedIn: setLoggedIn}}>
        <App />
    </ApplicationContext.Provider>
    );
}