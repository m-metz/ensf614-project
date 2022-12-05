/**
 * Logout page component to restate logged state
 */


export default function Logout(props) {

    function cancelHandler() {
        window.location.pathway = '/';
        window.location.href = window.location.pathway;
    }

    //clears sessionstorage to reset currentEmail and reset state to logged out
    function logoutHandler(evt) {
        evt.preventDefault();
        sessionStorage.setItem("currentEmail", null);
        window.location.pathway = '/';
        window.location.href = window.location.pathway;
    }


return (<div className="modal">
    <h3>Are you sure you want to logout?</h3>
    <button className='btn' onClick={logoutHandler} type="submit">Log Out</button>
    <button className='btn btn--alt' onClick={cancelHandler}>Stay Logged In</button>  
    </div>)
}
