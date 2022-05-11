import React from "react";
import "./App.css";

import Slider from "./components/Slider/Slider";
import ClubInfo from "./components/ClubInfo/ClubInfo";

function App() {
  const [ clubID, setClubID ] = React.useState(0);

  //Getting all teams for API
  const [ clubsInfo, setClubsInfo ] = React.useState([]);
  const API_KEY = "https://api.football-data.org/v2/competitions/PL/teams";
  React.useLayoutEffect(() => {
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

  //https://stackoverflow.com/questions/29100774/reactjs-setstate-on-parent-inside-child-component
  //In order to pass setState to child I have to create "wrapper" function for it which is passed as props
  function settingID(id) {
    setClubID(id);
  }

  return (
    <main className="App">
      <header className="App-header">
        <h1>Premier League Clubs</h1>
        <p>
          Simple application which shows basic information about Premier League
          clubs like stadion, date of creation, current players, etc.
        </p>
      </header>
      <Slider settingID={settingID} clubsInfo={clubsInfo} />
      <ClubInfo clubID={clubID} />
    </main>
  );
}

export default App;
