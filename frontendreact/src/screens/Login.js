import Backdrop from "../components/Backdrop";

function Login(props) {

    function cancelHandler() {
        window.location.pathway = '/';
        window.location.href = window.location.pathway;
    }

    function confirmHandler(evt) {
        //grab data from form and save as variables to send to server
        //TODO: getFetch from server the registered user information

        //setSession to hold user info
        evt.preventDefault();
        let loginForm = document.getElementById('loginForm');
        sessionStorage.setItem("currentEmail", loginForm.email.value);
        console.log(sessionStorage.getItem("currentEmail"));
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
        <form id="loginForm">
            <label>Enter your email: </label>
            <input type="text" id="email" name="email" required></input>
            <br></br><br></br>
            <label>Enter your password: </label>
            <input type="text" id="password" name="password" required></input>
            <br></br><br></br>
            <span>
            <button className='btn' onClick={confirmHandler} type="submit">Log In</button>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>        
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