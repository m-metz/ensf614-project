import { useState } from 'react';
import './App.css';

//import pages
import Homepage from './screens/Homepage';
import Moviepage from './screens/Moviepage';
import Register from './screens/Register';
import Admin   from './screens/Admin';
import Login from './screens/Login';
import Navbar from './components/Navbar';
import BuyTicketsPage from './screens/BuyTicketsPage';
import SelectSeatsPage from './screens/SelectSeatsPage';
import Logout from './screens/Logout';
import {useApplicationContextState } from './context';
import Modal from 'react-modal';
import Prerelease from './screens/Prerelease';
import CancelTicket from './screens/CancelTicketsPage';


function App() {

  let component;
  switch(window.location.pathname) {
    case "/":
      component = <Homepage />;
      break
    case "/register":
      component = <Register />;
      break
      case "/login":
      component = <Login/>;
      break
    case "/admin":
      component = <Admin />;
      break
    case "/moviepage":
      component = <Moviepage />;
      break
    case "/buyticketspage":
      component = <BuyTicketsPage />;
      break
    case '/selectseatspage':
      component = <SelectSeatsPage />;
      break
    case '/logout':
      component = <Logout/>;
      break
    case '/prerelease':
      component=<Prerelease />;
      break
    case '/cancelticket':
      component=<CancelTicket/>
      break
  }

  const email = sessionStorage.getItem("currentEmail");
  const isLoggedIn = email !== null && email !== 'null';
  //localhost:3000/
  return (
    <div>
      <Navbar loggedIn={isLoggedIn}/> 
      {component}

    </div>
  );
}

export default App;
