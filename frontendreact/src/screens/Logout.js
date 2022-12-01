export default function Logout(props) {

    function cancelHandler() {
        window.location.pathway = '/';
        window.location.href = window.location.pathway;
    }

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
