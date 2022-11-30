//NavBar at top of all screens that allows user to open register and login at any time
import { useState } from 'react';


export default function Navbar(props) {

    return (<nav className='nav'>
        <a href="/" className="site-title"> Movies </a>
        <ul>
            <li>
                <a href="/register">Register </a>
            </li>
            <li>
                <a href="/login">Login </a>
            </li>
            {props.loggedIn ? (
                <><li>
                    <a href='/prerelease'>Prereleased Movies</a>
                </li><li>
                        <a href='/payFee'>Manage Account</a>
                    </li></>
                ): (
                    null
                )}
            <li>
                <a href="/admin">Administrator Mode </a>
            </li>
        </ul>
    </nav>
    )
}