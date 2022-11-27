import Paymentinfo from '../components/Paymentinfo';
import { useState } from 'react';

function Register(props) {
    const [modalVisible, setModalVisible] = useState(true);

    function cancelHandler() {
        window.location.pathway = '/';
        window.location.href = window.location.pathway;

    }

    function confirmHandler() {
        //grab data from form and save as variables to send to server
        props.onConfirm();
    }

    return (
    <div className='modal' id="registermodal">
        <h3>
            Please Enter Information to Register:
        </h3>
        <br></br>
        <form>
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
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>        
        </scan>
        </form><br></br>
 
    </div>
    );
}

export default Register;