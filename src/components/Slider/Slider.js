import React from "react";
import "./Slider.css";
export default function Slider(clubData) {
  //Update state in App, thanks to this App knows which club(id) was clicked, and App can pass this info to ClubInfo component to render the info abou clicked club
  function setID(id) {
    clubData.settingID(id);
  }

  const clubsCrest = clubData.clubsInfo.map(club => {
    const { crestUrl, name, id } = club;
    //If id is the same as id of clicked element add extra styles to highligh it
    const { currentClubID } = clubData;
    const classNameForImg =
      currentClubID === id
        ? "Slider-crest Slider-crest--highlight"
        : "Slider-crest";

    return (
      <img
        key={id}
        src={crestUrl}
        className={classNameForImg}
        alt={`The crest of ${name}`}
        onClick={() => setID(id)}
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
