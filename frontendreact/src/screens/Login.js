import Backdrop from "../components/Backdrop";
import { getFetch } from '../fetch';

/**
 * Login page component that checks user login credentials
 */


function Login() {

    function cancelHandler() {
        window.location.pathway = '/';
        window.location.href = window.location.pathway;
    }

    async function confirmHandler() {      
        let loginForm = document.getElementById('loginForm');

        //Verify credentials with server
        let user = await getFetch("http://localhost:8080/RegisteredUser/"+loginForm.email.value+"/"+loginForm.password.value);

        if(user['error'] == "Internal Server Error") {
            alert(user.message);
            return -1;
        }
        let memExpiry = await getFetch("http://localhost:8080/RegisteredUser/" + loginForm.email.value);
        sessionStorage.setItem("currentEmail", loginForm.email.value);
        sessionStorage.setItem("currentPassword", loginForm.password.value);
        sessionStorage.setItem("currentName", user.name);
        sessionStorage.setItem("currentAddress", user.address);
        let paymentCardObject = user.paymentCards[0];
        for(const element in paymentCardObject) (
            sessionStorage.setItem(element, paymentCardObject[element])
        )
        sessionStorage.setItem("memExpiry", memExpiry.membershipExpiry);
        console.log(`current email ${sessionStorage.getItem("currentEmail")}`);
        window.location.pathway = '/';
        window.location.href = window.location.pathway;

    }

    return (
    <div>
    <div className = "modal">
        <h3>
            Please Enter Information to Login:
        </h3>
        <br></br>
        <form onSubmit={e => { e.preventDefault(); }} id="loginForm">
            <label>Enter your email: </label>
            <input type="text" id="email" name="email" required></input>
            <br></br><br></br>
            <label>Enter your password: </label>
            <input type="text" id="password" name="password" required></input>
            <br></br><br></br>
            <span>
            <button className='btn' onClick={confirmHandler}>Log In</button>
            <button className='btn btn--alt' onClick={cancelHandler}>Return to Home</button>        
        </span>
        </form><br></br>
        </div>
        <div>
            <Backdrop />
        </div>
    </div>
    );
}
export default Login;