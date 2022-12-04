import { getFetch } from '../fetch';
import { postFetch } from '../fetch';
import {useState} from 'react';

function PayMembership() {

    async function payMembershipHandler() {
    
        postFetch("http://localhost:8080/RegisteredUser/"+sessionStorage.currentEmail+"/renew-membership", null);
        let updatedMemberExpiry = 
        alert("Renewal Successful!");
    }
    
    return (
    <div  className="card">
        <h3>
        Account Information:
        </h3>
    <div>
        <span><label>Member Name: {sessionStorage.currentName}</label></span>
        <br></br><br></br>
        <label>Member Address: {sessionStorage.currentAddress}</label>
        <br></br><br></br>
        <label>Member Email: {sessionStorage.currentEmail}</label>
        <br></br><br></br>
        <h4>Payment Information: </h4>
        <label>Card Type: {sessionStorage.type}</label><br></br>
        <label>Card Number: {sessionStorage.lastFourDigits}</label><br></br>
        <label>Card Billing Postal: {sessionStorage.billingPostal}</label><br></br>
        <div>
        <h4>Your membership expires on: {sessionStorage.memExpiry}</h4>
        <button className='btn' onClick={payMembershipHandler}>Renew Membership</button>
        </div>
    </div>
    </div>
    )
}
export default PayMembership;