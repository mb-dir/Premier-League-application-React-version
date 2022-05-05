import React from "react";
import "./Slider.css";
export default function Slider() {
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

  const clubsCrest = clubsInfo.map(club => {
    const { crestUrl, name, id } = club;
    return (
      <img
        key={id}
        src={crestUrl}
        className="Slider-crest"
        alt={`The crest of ${name}`}
      />
    );
  });

  return (
    <section className="Slider">
      <h2 className="Slider-header">
        Click the crest to see more info about the club
      </h2>
      <div className="Slider-wrapper">{clubsCrest}</div>
    </section>
  );
}
