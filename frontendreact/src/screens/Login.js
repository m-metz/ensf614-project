import Backdrop from "../components/Backdrop";

function Login() {

    function cancelHandler() {
        window.location.pathway = '/';
        window.location.href = window.location.pathway;
    }

    function confirmHandler() {
        //setSession to hold user info        
        let loginForm = document.getElementById('loginForm');

        //Verify credentials with server
        //If verfied:
        //Change state to logged in

        sessionStorage.setItem("currentEmail", loginForm.email.value);
        sessionStorage.setItem("currentPassword", loginForm.password.value);
        console.log(`current email ${sessionStorage.getItem("currentEmail")}`);
        window.location.pathway = '/';
        window.location.href = window.location.pathway;

        //If not verfied 
        //alert("Invalid credentials! Please try again.")
        //return -1;
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