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

  return (
    <section className="Slider">
      <h2 className="Slider-header">
        Click the crest to see more info about the club
      </h2>
      <div className="Slider-wrapper">
        {/* All below items will be dynamically created based on API resposne and map method */}
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
        <img
          className="Slider-crest"
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="The crest of the best football club in the World;)"
        />
      </div>
    </section>
  );
}
