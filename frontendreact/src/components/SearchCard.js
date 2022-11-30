import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

  //Uses the getFetch to grab all theatres and populate dropdown
  window.addEventListener("load", async function(evt) {
    evt.preventDefault();
    // let theatreList = await getFetch(api);
    //HARDCODE FOR TESTS
    let theatreList = [{id: "1", name: "Chinook Scotiabank", Address: "123 Avenue"}, {id: "2", name: "Landmark", Address: "567 Avenue"}]
    let theatreNames = [];
    theatreList.forEach(theatre => theatreNames.push(theatre['name']))
    console.log(theatreNames)

    //Populate select dropdown in card with theatre names based on the fetched list
    let theatres = document.getElementById('theatreOptions'), theatre=theatreNames;
    for (let i = 0; i<theatreNames.length; i++) {
      let option = document.createElement("OPTION"),
                  txt = document.createTextNode(theatreNames[i]);
      option.appendChild(txt);
      theatres.insertBefore(option, theatres.lastChild);
    }
  });

export default function SearchCard(props) {

  const currentMovieId = sessionStorage.getItem("currentMovieId");

  async function showtimeHandler(evt) {
    evt.preventDefault();
    sessionStorage.setItem("selectedTheatre", document.getElementById("theatreOptions").value)
    console.log("Theatre selected: ", sessionStorage.getItem("selectedTheatre"));

    // let theatres = await getFetch();
    //Save theatre Id
    let theatres = [{id: "1", name: "Chinook Scotiabank", Address: "123 Avenue"}, {id: "2", name: "Landmark", Address: "567 Avenue"}]
    let currentTheatre = theatres.find(theatre => theatre.name === sessionStorage.getItem("selectedTheatre"));
    sessionStorage.setItem("currentTheatreId", currentTheatre.id);
    const currentTheatreId = sessionStorage.getItem("currentTheatreId");
    console.log("theatre id", sessionStorage.getItem("currentTheatreId"));

    
    // let showtimeList = await getFetch(GETSHOWTIMESAPI); --Do this based on selectedTheatre!!
    //HARDCODED FOR TESTING
    let showtimeList = [{id: "1", time: "19:00:00", date:"2022-12-14", screenNum: "1"}, {id: "2", time: "21:00:00", date:"2022-12-14", screenNum: "2"}, {id: "3", time: "19:00:00", date:"2022-12-15", screenNum: "1"}]
    let showtimes = []
    showtimeList.forEach(showtime => showtimes.push(showtime['date']+" "+showtime['time']));
    console.log(showtimes);

    //Remove old showtimes from dropdown -- Figure out dropdown!
    let i, oldShowtimes = document.getElementById("showtimeOptions").options.length-1;
 
      for(i = oldShowtimes; i > 0; i--) {
        //console.log(oldShowtimes - i, ": ",document.getElementById("showtimeOptions")[i])
        document.getElementById("showtimeOptions")[oldShowtimes - i].innerHTML=""; 
      }

    //Populate showtime dropdown
    let showtimesAll = document.getElementById('showtimeOptions'), showtime=showtimes;
    document.getElementById("defaultShowtime").innerHTML = "Please select a showtime";
    for (let i = 0; i<showtimes.length; i++) {
      let option = document.createElement("OPTION"),
                  txt = document.createTextNode(showtime[i]);
      option.appendChild(txt);
      showtimesAll.insertBefore(option, showtimesAll.lastChild);
    } 
  }

  function ticketHandler(evt) {
    evt.preventDefault();
    sessionStorage.setItem("selectedShowtime", document.getElementById("showtimeOptions").value)
    console.log("Showtime selected: ", sessionStorage.getItem("selectedShowtime"));

    //find Id of selected showtime
    //TODO: add await getFetch
    let showtimeList = [{id: "1", time: "19:00:00", date:"2022-12-14", screenNum: "1"}, {id: "2", time: "21:00:00", date:"2022-12-14", screenNum: "2"}, {id: "3", time: "19:00:00", date:"2022-12-15", screenNum: "1"}]
    let currentShowtime = showtimeList.find(showtime => (showtime.date+" "+showtime.time) === sessionStorage.getItem("selectedShowtime"));
    sessionStorage.setItem("currentShowtimeId", currentShowtime.id);
    console.log(sessionStorage.getItem("currentShowtimeId"));
    window.location.pathway = '/selectseatspage';
    window.location.href = window.location.pathway;
  }

  return (
    <Card sx={{ minWidth: 750, height: 500}}>
      <CardContent>
        <form id = "theatreForm">
          <span>
          <label> Select your theatre </label>
          <select name='theatre' id="theatreOptions">
            <option value='default'> Select Theatre </option>
          </select>
          <button className="btn" type="submit" id="theatreSelect" onClick={showtimeHandler}>Find Showtimes</button>
          </span>
        </form>
        <br></br>
        <form id = "showtimeForm">
          <span>
          <label> Available Showtimes </label>
          <select name='showtime' id="showtimeOptions">
            <option value='defaultShowtime' id="defaultShowtime"> Please select theatre to view showtimes </option>
          </select>
          <button className="btn" type="submit" id="theatreSelect" onClick={ticketHandler}>Select Seats</button>
          </span>
        </form>

      </CardContent>

    </Card>
  );
} 