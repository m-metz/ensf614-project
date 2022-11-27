
import './App.css';
import { Route} from 'react-router-dom';

//import pages
import Homepage from './screens/Homepage';
import Moviepage from './screens/Moviepage';
import Register from './screens/Register';
import Admin   from './screens/Admin';
import Login from './screens/Login';
import Navbar from './components/Navbar';
import Todo from './components/Todo';

function App() {
  let component;
  switch(window.location.pathname) {
    case "/":
      component = <Homepage />;
      break
    case "/login":
      component = <Login />;
      break
    case "/register":
      component = <Register />;
      break
    case "/admin":
      component = <Admin />;
      break
  }

  //localhost:3000/
  return (
    <div>
      <Navbar />
      {component}

    </div>
  );
}

export default App;
