import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SearchCard(props) {

  //Uses the getFetch to grab all theatres related to the current movie
  async function load_theatres(api) {
    // let theatreList = await getFetch(api);
    //hardcode for tests
    let theatreList = [{id: "1", name: "Chinook Scotiabank", Address: "123 Avenue"}, {{id: "2", name: "Landmark", Address: "567 Avenue"}}]
    let theatreNames = [];
    theatreList.forEach(theatre => theatreNames.push(theatre['name']))
    console.log(theatreNames)

    //Populate select dropdown in card with theatre names based on the fetched list
    let theatres = document.getElementbyId('theatreOptions'), theatre=theatreNames;
    for (let i = 0; i<theatreNames.length; i++) {
      let option = document.createElement("OPTION"),
                  txt = document.createTextNode(theatreNames[i]);
      option.appendChild(txt);
      theatres.insertBefore(option, theatres.lastChild);
    }
  }

  load_theatres("text");


  return (
    <Card sx={{ minWidth: 750, height: 500}}>
      <CardContent>
        <form id = "theatreForm">
          <label for="theatre"> Select your theatre </label>
          <select name='theatre' id="theatreOptions">
            <option value='default'> Select Theatre </option>
          </select>
          <br></br>
          <button className="btn" type="submit" id="theatreSelect">Find Showtimes </button>
        </form>

        <br></br>
      </CardContent>

    </Card>
  );
} 