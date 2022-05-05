import React from "react";
import "./ClubInfo.css";

export default function ClubInfo(clubID) {
  const [ clubInfo, setClubInfo ] = React.useState({});

  //Durning first render clubID is 0, and request of club with id === clubID has no sense so it is te reason why there is this if statemenet which checks if clubID is 0
  const API_KEY = `https://api.football-data.org/v2/competitions/PL/teams/${clubID.clubID ===
  0
    ? ""
    : clubID.clubID}`;
  React.useEffect(() => {
    fetch(API_KEY, {
      method: "GET",
      headers: {
        "X-Auth-Token": "b100821898ab4506af51fd31aa51125e",
      },
    })
      .then(club => club.json())
      //Array of objects - each object has info about concrete PL team
      .then(club => setClubInfo(club));
  }, []);
  return (
    <section className="ClubInfo">
      <h2>Here will be info about the clicked club</h2>
    </section>
  );
}
