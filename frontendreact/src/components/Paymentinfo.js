function Paymentinfo() {
    return (
        <form class="card">
            <h4>Payment Information: </h4>
            <div>
            <label for="cardtype">Type: </label>
            <span>
            <input type="radio" id="credit" name="cardtype" value="credit"></input>
            <label for="credit">Credit Card</label>
            <input type="radio" id="debit" name="cardtype" value="debit"></input>
            <label for="credit">Debit Card</label>
            </span>
            <br></br>
            </div>
            <br></br>
            <label for="cardname">Cardholder Name: </label>
            <input type="text" id="cardname" name="cardname" required></input>
            <br></br>
            <br></br>
            <label for="cardnum">Card Number: </label>
            <input type="text" id="cardnum" name="cardnum" required></input>
            <br></br>
            <br></br>
            <label for="cardexpiry">Card Expiry (MM/YYYY): </label>
            <input type="text" id="cardexpiry" name="cardexpiry" required></input>
            <br></br>
            <br></br>
            <label for="csv">Security Code: </label>
            <input type="text" id="csv" name="csv" required></input>
            <br></br><br></br>
            <button className='btn' type="submit">Verify</button>
        </form>
    );

}
export default Paymentinfo;