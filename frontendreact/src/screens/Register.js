import Paymentinfo from '../components/Paymentinfo';
import { useState } from 'react';
import Backdrop from '../components/Backdrop';
import Homepage from '../screens/Homepage'

function Register(props) {

    function cancelHandler() {
        window.location.pathway = '/';
        window.location.href = window.location.pathway;
    }

    function confirmHandler(evt) {
        //grab data from form and save as variables to send to server
        evt.preventDefault();
        let registerForm = document.getElementById('registerForm');
        let cardName = document.getElementById('cardname').value;

        console.log(cardName);
        //post all information to server
        let data = {
        id: "1",
        email: "fake.email@gmail.com",
        name: "Fake User",
        address: "Nice Address, Calgary, AB, Canada",
        password: "password",
        paymentCards: [
            {
                id: 1,
                cvv: 123,
                nameOfHolder: "Fake User",
                expiryDate: "2023-12-01",
                billingPostal: "D6KB9F",
                type: "Credit",
                lastFourDigits: "1234"
            }
        ]}
        //If user email does not already exist
        alert("Thanks for registering! You will be redirected to the login page now");
        // window.location.pathway = '/login';
        // window.location.href = window.location.pathway;
    }

    return (
    <div>
        <div className = "modal">
        <h3>
            Please Enter Information to Register:
        </h3>
        <br></br>
        <form id="registerForm">
            <div>
            <label for="name">Enter your name: </label>
            <input type="text" id="name" name="name" required></input>
            </div><br></br>
            <div>
            <label for="email">Enter your email: </label>
            <input type="text" id="email" name="email" required></input>
            </div><br></br>
            <div>
            <label for="address">Enter your address: </label>
            <input type="text" id="address" name="address" required></input>
            </div><br></br>
            <div>
                <Paymentinfo />
            </div>
            <div><br></br>
            <label for="password">Choose a password: </label>
            <input type="text" id="password" name="password" required></input>
            </div><br></br>
            <scan>
            <button className='btn' onClick={confirmHandler} type="submit">Confirm</button>
            <button className='btn btn--alt' onClick={cancelHandler}>Return to Home</button>        
        </scan>
        </form><br></br>
        </div>
        <div>
            <Backdrop />
        </div>
    </div>

    );
}

export default Register;