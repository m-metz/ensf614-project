import { useState } from 'react';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Backdrop from './Backdrop';

function Todo(props) {
    //returns array with 2 elements
    const [modalVisible, setModalVisible] = useState(false);

    function selectHandler() {
        console.log("Clicked");
        console.log(props.text);
        setModalVisible(true);

    }

    function closeModalHandler() {
        setModalVisible(false);
    }

    return (
        <div className = 'card'>
        <h1>Register</h1>
        <div className = 'actions'>
        <button className='btn' onClick={selectHandler}> Select</button>
        </div>
        {modalVisible ? <Register onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null}
        {modalVisible ? <Backdrop /> : null}
        </div>
    );
}

export default Todo;