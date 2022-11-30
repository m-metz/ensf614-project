//NavBar at top of all screens that allows user to open register and login at any time
import { useState } from 'react';


export default function Navbar(props) {

    return (<nav className='nav'>
        <a href="/" className="site-title"> Movies </a>
        <ul>
            {props.loggedIn ? (
                <><li>
                    <a href='/prerelease'>Pre-Releases</a>
                </li><li>
                        <a href='/payFee'>Manage Account</a>
                    </li>
                    <li>
                        <a href='/logout'>Logout</a>
                    </li>
                    </>
                ): (
                    <>
                    <li>
                    <a href="/register">Register </a>
                </li>
                <li>
                    <a href="/login">Login </a>
                </li></>
                )}
            <li>
                <a href="/admin">Administrator Mode </a>
            </li>
        </ul>
    </nav>
    )
}