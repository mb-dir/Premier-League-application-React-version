import React from "react";
import "./ClubInfo.css";

//Durning first render clubID is 0, cuz it is the default value of state in App
export default function ClubInfo(clubID) {
  const [ clubInfo, setClubInfo ] = React.useState({});

  //Get all teams and find the clicked team by clubID
  const API_KEY = "https://api.football-data.org/v2/competitions/PL/teams/";
  React.useEffect(
    () => {
      fetch(API_KEY, {
        method: "GET",
        headers: {
          "X-Auth-Token": "b100821898ab4506af51fd31aa51125e",
        },
      })
        .then(clubs => clubs.json())
        .then(clubs => {
          const clickedClub = clubs.teams.find(club => {
            return club.id === clubID.clubID;
          });
          setClubInfo(clickedClub);
        });
    },
    [ clubID.clubID ]
    //Everytime when clubID is changed get info about new(clicked) club
  );
  return (
    <section className="ClubInfo">
      <h2>Here will be info about the clicked club</h2>
    </section>
  );
}
