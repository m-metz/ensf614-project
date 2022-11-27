//NavBar at top of all screens that allows user to open register and login at any time
import { useState } from 'react';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Backdrop from './Backdrop';


export default function Navbar() {
    const [modalVisible, setModalVisible] = useState(false);

    function selectHandler() {
        console.log("Clicked");
        setModalVisible(true);
    }

    function closeModalHandler() {
        setModalVisible(false);
    }

    return (<nav className='nav'>
        <a href="/" className="site-title"> Movie Theatre </a>
        <ul>
            <li>
                <a href="/register">Register </a>
            </li>
            <li>
                <a href="/login">Login </a>
            </li>
            <li>
                <a href="/admin">Administrator Mode </a>
            </li>
        </ul>
    </nav>
    )
}