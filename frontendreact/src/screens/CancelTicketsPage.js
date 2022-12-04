import { getFetch } from '../fetch';
import { postFetch } from '../fetch'

export default function CancelTicketPage() {

    async function cancelHandler() {
        let cancelForm = document.getElementById('cancelForm');
        let ticketNum = cancelForm.ticketnum.value;
        let email = cancelForm.email.value;

        //getTickettoCheckIfValid
        let ticket = await getFetch("http://localhost:8080/ticket/"+ticketNum);

        console.log(ticket);
        if(ticket['error'] === "Internal Server Error") {
            alert("Invalid ticket number. Please try again!");
            return -1;
        }

        let cancellation = await postFetch(("http://localhost:8080/cancel/"+ticketNum+"/"+email), null);
        console.log(cancellation.message);
        if(cancellation["error"] === "Internal Server Error") {
            alert("Error: "+cancellation.message);
            return -1;
        }
        
        document.getElementById('cancelMessage').innerHTML = "Cancellation Successful!" +"<br/>Your cancellation code: "+
        cancellation['creditCode']+"<br/>Expiry Date: "+cancellation['expiryDate']+"<br/>These details will be sent to your email.";

    }

    return (<div  className="card">
        <h3>
        Please Enter Ticket Number:
    </h3>
    <br></br>
    <form onSubmit={e => { e.preventDefault(); }} id="cancelForm">
        <label>Enter your email: </label>
        <input type="text" id="email" name="email" required></input>
        <br></br><br></br>
        <label>Enter your ticket number: </label>
        <input type="text" id="ticketnum" name="ticketnum" required></input>
        <br></br><br></br><br></br>
        <span>
        <button className='btn' onClick={cancelHandler}>Submit Cancellation</button>       
    </span>
    </form><br></br>
    <h5 id="cancelMessage" className="card"></h5>
    </div>
    )
}