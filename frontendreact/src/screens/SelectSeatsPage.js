import SeatView from '../components/SeatView';

const seats = [{seatNum: "1", rowNum: "1"}, {seatNum: "2", rowNum:"1"}, {seatNum: "3", rowNum: "1"}, {seatNum: "4", rowNum:"1"}, {seatNum: "5", rowNum:"1"},
                {seatNum: "1", rowNum: "2"}, {seatNum: "2", rowNum:"2"}, {seatNum: "3", rowNum: "2"}, {seatNum: "4", rowNum:"2"}, {seatNum: "5", rowNum:"2"},
                {seatNum: "1", rowNum: "3"}, {seatNum: "2", rowNum:"3"}, {seatNum: "3", rowNum: "3"}, {seatNum: "4", rowNum:"3"}, {seatNum: "5", rowNum:"3"},
                {seatNum: "1", rowNum: "4"}, {seatNum: "2", rowNum:"4"}, {seatNum: "3", rowNum: "4"}, {seatNum: "4", rowNum:"4"}, {seatNum: "5", rowNum:"4"},
                {seatNum: "1", rowNum: "5"}, {seatNum: "2", rowNum:"5"}, {seatNum: "3", rowNum: "5"}, {seatNum: "4", rowNum:"5"}, {seatNum: "5", rowNum:"5"}]


function SelectSeatsPage() {
    return (
        <section>
           
            <h1>Please Select Seats</h1>
            <h5> You have selected the following seats: {sessionStorage.selectedSeats} </h5>
            <SeatView seats={seats} />
  

        </section>
    );
}
export default SelectSeatsPage;