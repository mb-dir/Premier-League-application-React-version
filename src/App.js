import React from "react";
import "./App.css";

import Slider from "./components/Slider/Slider";
import ClubInfo from "./components/ClubInfo/ClubInfo";

function App() {
  const [ clubID, setClubID ] = React.useState(0);

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
      <Slider settingID={settingID} />
      <ClubInfo />
    </main>
  );
}

export default App;
