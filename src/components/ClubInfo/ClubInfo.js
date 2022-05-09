import React from "react";
import "./ClubInfo.css";

//Durning first render clubID is 0, cuz it is the default value of state in App
export default function ClubInfo(clubID) {
  const [ clubInfo, setClubInfo ] = React.useState({});
  const API_KEY = "https://api.football-data.org/v2/teams/";
  React.useEffect(
    () => {
      //If there is no first render(durning first render clubID is 0, cuz it is default state value in App component) get info about clicked club
      if (clubID.clubID !== 0) {
        fetch(`${API_KEY}${clubID.clubID}`, {
          method: "GET",
          headers: {
            "X-Auth-Token": "b100821898ab4506af51fd31aa51125e",
          },
        })
          .then(club => club.json())
          .then(club => {
            if (clubID.clubID) {
              setClubInfo(club);
            }
          });
      }
    },
    [ clubID.clubID ]
    //Everytime when clubID is changed get info about new(clicked) club
  );
  let infoClubContent;
  let teamSheet;
  //Create content only when clubID.clubID is !== 0, cuz that means user clicked the crest
  if (clubID.clubID) {
    const {
      name,
      address,
      crestUrl,
      website,
      email,
      clubColors,
      venue,
      squad,
    } = clubInfo;
    infoClubContent = (
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

    //Create the list of player based on the "squad"
    if (squad) {
      teamSheet = squad.map(player => {
        const { id, name, position, countryOfBirth } = player;
        return (
          <li
            className="ClubInfo-player"
            key={id}
          >{`${name}(${position}, ${countryOfBirth})`}</li>
        );
      });
    }
  }
  return (
    <section className="ClubInfo">
      {/* Render only when clubID.clubID is not 0(0 is default value of state in App, and when it is 0 that means it is first render before clicking the crest), that means user clicked the crest*/}
      {clubID.clubID ? (
        <div>
          {infoClubContent}
          <h2>Squad</h2>
          <ul className="ClubInfo-players">{teamSheet}</ul>
        </div>
      ) : (
        <h2>Here will be info about the clicked club</h2>
      )}
    </section>
  );
}
