import React from "react";
import "./Slider.css";
export default function Slider(settingID) {
  //Update state in App, thanks to this App knows which club(id) was clicked, and App can pass this info to ClubInfo component to render the info abou clicked club
  function setID(id) {
    settingID.settingID(id);
  }

  const clubsCrest = clubsInfo.map(club => {
    const { crestUrl, name, id } = club;
    return (
      <img
        key={id}
        src={crestUrl}
        className="Slider-crest"
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
