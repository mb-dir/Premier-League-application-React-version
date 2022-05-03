import React from "react";
import "./Slider.css";
export default function Slider() {
  const roll = (
    <div className="Slider-roll">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="The crest of the best football club in the World;)"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="The crest of the best football club in the World;)"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="The crest of the best football club in the World;)"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="The crest of the best football club in the World;)"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="The crest of the best football club in the World;)"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="The crest of the best football club in the World;)"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="The crest of the best football club in the World;)"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="The crest of the best football club in the World;)"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="The crest of the best football club in the World;)"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="The crest of the best football club in the World;)"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="The crest of the best football club in the World;)"
      />
    </div>
  );

  return (
    <div className="Slider">
      <button className="Slider-btn">prev</button>
      <div className="Slider-wrapper">{roll}</div>
      <button className="Slider-btn">next</button>
    </div>
  );
}
