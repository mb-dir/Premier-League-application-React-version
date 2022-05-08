import React from "react";
import "./ClubInfo.css";

//Durning first render clubID is 0, cuz it is the default value of state in App
export default function ClubInfo(clubID) {
  const [ clubInfo, setClubInfo ] = React.useState({});
  const API_KEY = "https://api.football-data.org/v2/competitions/PL/teams/";
  React.useEffect(
    () => {
      //If there is no first render(durning first render clubID is 0, cuz it is default state value in App component) get info about clicked club - BUT I get an error "Access to fetch at 'https://api.football-data.org/v2/competitions/PL/teams/68' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled"
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
