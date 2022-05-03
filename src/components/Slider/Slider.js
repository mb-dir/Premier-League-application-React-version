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

  //Default scrollPos is 0, each "prev"/"next" click will update it
  const [ scrollPos, setScrollPos ] = React.useState(0);

  //When user clicks "prev" btn change position
  function scrollLeft() {
    setScrollPos(prevPos => {
      return prevPos - 100;
    });
    //I turned out that it doesn't work in React, I have found the solution(https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element), but it uses useRef, I haven't learnt about it so far and in this project I want to use only what I have learnt so far
    roll.scrollTo({
      left: scrollPos,
      behavior: "smooth",
    });
  }

  return (
    <div className="Slider">
      <button onClick={scrollLeft} className="Slider-btn">
        prev
      </button>
      <div className="Slider-wrapper">{roll}</div>
      <button className="Slider-btn">next</button>
    </div>
  );
}
