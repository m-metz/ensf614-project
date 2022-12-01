import { getFetch } from '../fetch';
import { postFetch } from '../fetch';
import {useState} from 'react';

export default function PayMembership() {

    function payMembershipHandler() {
    
        postFetch("PAYFEEAPI", "ANYOTHER INFO");

    }

    const[isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState([]);
    
    getFetch("http://localhost:8080/RegisteredUser/"+sessionStorage.currentEmail+sessionStorage.currentPassword)
    .then(data => {
        setIsLoading(false);
        setUser(data);
    });

    if(isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    if(!isLoading) {
        console.log(user);
    }
    

    return (
    <div  className="card">
        <h3>
        Account Information:
        </h3>
    <div>
        {/* <span><label>Member Name: {member.name}</label></span>
        <br></br><br></br>
        <label>Member Email: {member.email}</label>
        <br></br><br></br>
        <h4>Payment Information: </h4>
        <label>Card Type: {member.paymentInfo.cardType}</label><br></br>
        <label>Card Number: {member.paymentInfo.cardNum}</label><br></br>
        <label>Card Expiry: {member.paymentInfo.cardExpiry}</label><br></br><br></br>
        <div>
        <button className='btn' onClick={payMembershipHandler}>Pay Annual Fee</button>
        </div> */}
    </div>
    </div>
    )
}