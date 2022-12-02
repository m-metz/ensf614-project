function Paymentinfo() {
    //take in props here to know where to send this information
    return (
        <form class="card">
            <h4>Payment Information: </h4>
            <div id="cardType">
            <label htmlFor="cardtype">Type: </label>
            <span>
            <input type="radio" id="type" name="cardtype" value="credit"></input>
            <label for="credit">Credit Card</label>
            <input type="radio" id="type" name="cardtype" value="debit"></input>
            <label for="debit">Debit Card</label>
            </span>
            <br></br>
            </div>
            <br></br>
            <label htmlFor="cardname">Cardholder Name: </label>
            <input type="text" id="cardname" name="cardname" required></input>
            <br></br>
            <br></br>
            <label htmlFor="cardname">Billing Postal: </label>
            <input type="text" id="postal" name="postal" required></input>
            <br></br>
            <br></br>
            <label htmlFor="cardnum">Card Number: </label>
            <input type="text" id="cardnum" name="cardnum" required></input>
            <br></br>
            <br></br>
            <label htmlFor="cardexpiry">Card Expiry (MM/YYYY): </label>
            <input type="text" id="cardexpiry" name="cardexpiry" required></input>
            <br></br>
            <br></br>
            <label htmlFor="csv">Security Code: </label>
            <input type="text" id="csv" name="csv" required></input>
            <br></br><br></br>
            {/* <button className='btn' type="submit">Verify</button> */}
        </form>
    );

}
export default Paymentinfo;