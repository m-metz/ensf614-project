
function Login(props) {

    function cancelHandler() {
        window.location.pathway = '/';
        window.location.href = window.location.pathway;
    }

    function confirmHandler() {
        //grab data from form and save as variables to send to server
        //setSession to hold user info
        props.onConfirm();
    }

    return (
    <div className='modal'>
        <h3>
            Please Enter Information to Login:
        </h3>
        <br></br>
        <form>
            <label for="email">Enter your email: </label>
            <input type="text" id="email" name="email" required></input>

            <label for="password">Enter your password: </label>
            <input type="text" id="password" name="password" required></input>

            <scan>
            <button className='btn' onClick={confirmHandler} type="submit">Confirm</button>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>        
        </scan>
        </form><br></br>
 
    </div>
    );
}
export default Login;