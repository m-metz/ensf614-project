import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { getFetch } from '../fetch';
import {useState} from 'react';


  //Uses the getFetch to grab all theatres and populate dropdown
  window.addEventListener("load", async function(evt) {
    evt.preventDefault();
    let theatreList = await getFetch("http://localhost:8080/theatre/all");
    let theatreNames = [];
    theatreList.forEach(theatre => theatreNames.push(theatre['name']))

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

  const[isLoading, setIsLoading] = useState(true);
  const [theatres, setTheatres] = useState([]);

  getFetch("http://localhost:8080/theatre/all")
  .then(data => {
      setIsLoading(false);
      setTheatres(data);
  });

  if(isLoading) {
      return <section>
          <p>Loading...</p>
      </section>
  }

  async function showtimeHandler(evt) {
    evt.preventDefault();
    sessionStorage.setItem("selectedTheatre", document.getElementById("theatreOptions").value)
    console.log("Theatre selected: ", sessionStorage.getItem("selectedTheatre"));

    let theatres = await getFetch("http://localhost:8080/theatre/all");
    
    //Save theatre Id
    let currentTheatre = theatres.find(theatre => theatre.name === sessionStorage.getItem("selectedTheatre"));
    sessionStorage.setItem("currentTheatreId", currentTheatre.id);
    const currentTheatreId = sessionStorage.getItem("currentTheatreId");

    let showtimeList = await getFetch("http://localhost:8080/showtime/movie/"+currentMovieId+"/theatre/"+sessionStorage.currentTheatreId+"/upcoming");
    let showtimes = []
    showtimeList.forEach(showtime => showtimes.push(showtime['date']+" "+showtime['time']));

    //Remove old showtimes from dropdown
    let oldShowtimes = document.getElementById("showtimeOptions").options.length;
 
      for(let i = 0; i < oldShowtimes-1; i++) {
        document.getElementById("showtimeOptions")[i].innerHTML=""; 
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

  async function ticketHandler(evt) {
    evt.preventDefault();
    //Set Selected Showtime in Session Storage
    sessionStorage.setItem("selectedShowtime", document.getElementById("showtimeOptions").value)
    
    //Fetch ID
    let showtimeList = await getFetch("http://localhost:8080/showtime/movie/"+currentMovieId+"/theatre/"+sessionStorage.currentTheatreId+"/upcoming");
    let currentShowtime = showtimeList.find(showtime => (showtime.date+" "+showtime.time) === sessionStorage.getItem("selectedShowtime"));
    sessionStorage.setItem("currentShowtimeId", currentShowtime.id);

    //Redirect to the Select Seats Page
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