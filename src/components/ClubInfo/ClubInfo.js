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
  let content;
  //Durning first render clubInfo is falsy value so in order to avoid getting an error I check it with if
  if (clubInfo) {
    const {
      name,
      address,
      crestUrl,
      website,
      email,
      clubColors,
      venue,
    } = clubInfo;
    content = (
      <div className="ClubInfo-container">
        <h2>{name}</h2>
        <p className="ClubInfo-info">address: {address}</p>
        <p className="ClubInfo-info">venue: {venue}</p>
        <p className="ClubInfo-info">club colors: {clubColors}</p>
        <p className="ClubInfo-info">
          crest:{" "}
          <img className="ClubInfo-img" src={crestUrl} alt={`${name} crest`} />
        </p>
        <p className="ClubInfo-info">email: {email}</p>
        <a className="ClubInfo-link" href={website}>
          website
        </a>
      </div>
    );
  }
  return (
    <section className="ClubInfo">
      {clubInfo ? content : <h2>Here will be info about the clicked club</h2>}
    </section>
  );
}
