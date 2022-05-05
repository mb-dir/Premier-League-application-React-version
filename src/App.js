import React from "react";
import "./App.css";

import Slider from "./components/Slider/Slider";
import ClubInfo from "./components/ClubInfo/ClubInfo";

function App() {
  const API_KEY = "https://api.football-data.org/v2/competitions/PL/teams";

  const [ clubsInfo, setClubsInfo ] = React.useState([]);
  React.useEffect(() => {
    fetch(API_KEY, {
      method: "GET",
      headers: {
        "X-Auth-Token": "b100821898ab4506af51fd31aa51125e",
      },
    })
      .then(clubs => clubs.json())
      //Array of objects - each object has info about concrete PL team
      .then(clubs => setClubsInfo(clubs.teams));
  }, []);

  return (
    <main className="App">
      <header className="App-header">
        <h1>Premier League Clubs</h1>
        <p>
          Simple application which shows basic information about Premier League
          clubs like stadion, date of creation, current players, etc.
        </p>
      </header>
      <Slider />
      <ClubInfo />
    </main>
  );
}

export default App;
