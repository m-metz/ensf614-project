import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    //returns array with 2 elements
    const [modalVisible, setModalVisible] = useState(false);

    function selectHandler() {
        console.log("Clicked");
        console.log(props.text);
        setModalVisible(true);

    }

    return (
        <div className = 'card'>
        <h1>{props.text}</h1>
        <div className = 'actions'>
        <button className='btn' onClick={selectHandler}> Select</button>
        </div>
        {modalVisible ? <Modal /> : null}
        {modalVisible ? <Backdrop /> : null}
        </div>
    );
}

export default Todo;