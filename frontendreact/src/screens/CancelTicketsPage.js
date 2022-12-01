import { getFetch } from '../fetch';

export default function CancelTicketPage() {

    async function cancelHandler() {
        let cancelForm = document.getElementById('cancelForm');
        let ticketNum = cancelForm.ticketnum.value;
        //getTickettoCheckIfValid
        let ticket = await getFetch("http://localhost:8080/ticket/"+ticketNum);
        console.log(ticket);
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
        <br></br><br></br>
        <span>
        <button className='btn' onClick={cancelHandler}>Submit Cancellation</button>       
    </span>
    </form><br></br>
    </div>
    )
}