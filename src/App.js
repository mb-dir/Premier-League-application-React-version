import React from "react";
import "./App.css";

import Slider from "./components/Slider/Slider";
import ClubInfo from "./components/ClubInfo/ClubInfo";

function App() {
  //https://stackoverflow.com/questions/29100774/reactjs-setstate-on-parent-inside-child-component
  //In order to pass setState to child I have to create "wrapper" function for it which is passed as props
  const [ clubID, setClubID ] = React.useState(0);
  function settingID(id) {
    setClubID(id);
  }

  //Getting all teams for API
  const [ clubsInfo, setClubsInfo ] = React.useState([]);
  const API_KEY = "https://api.football-data.org/v2/competitions/PL/teams";
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

  //Getting info about clicked club
  const [ clubInfo, setClubInfo ] = React.useState({});
  const API_KEY_CLUB_INFO = "https://api.football-data.org/v2/teams/";
  React.useEffect(
    () => {
      //If there is no first render(durning first render clubID is 0, cuz it is default state value in App component) get info about clicked club
      if (clubID !== 0) {
        fetch(`${API_KEY_CLUB_INFO}${clubID}`, {
          method: "GET",
          headers: {
            "X-Auth-Token": "b100821898ab4506af51fd31aa51125e",
          },
        })
          .then(club => club.json())
          .then(club => {
            setClubInfo(club);
          });
      }
    },
    [ clubID ]
    //Everytime when clubID is changed get info about new(clicked) club
  );

  return (
    <main className="App">
      <header className="App-header">
        <h1>Premier League Clubs</h1>
        <p>
          Simple application which shows basic information about Premier League
          clubs like stadion, date of creation, current players, etc.
        </p>
      </header>
      <Slider
        settingID={settingID}
        clubsInfo={clubsInfo}
        currentClubID={clubID}
      />
      <ClubInfo clubInfo={clubInfo} />
    </main>
  );
}

export default App;
