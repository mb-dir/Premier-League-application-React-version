import React from "react";
import "./ClubInfo.css";

export default function ClubInfo(clubData) {
  //Durning first render props is an {}, so there is no reason to render any content - keeping info about it on bool value makes not repeat code
  const isPassedPopsNotEmpty = Object.keys(clubData.clubInfo).length !== 0;

  let infoClubContent;
  let teamSheet;
  //Create content only when clubID.clubInfo is not an empty obj({} is passed when first render), cuz that means user clicked the crest
  if (isPassedPopsNotEmpty) {
    const {
      name,
      address,
      crestUrl,
      website,
      email,
      clubColors,
      venue,
      squad,
    } = clubData.clubInfo;
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
      {/* Render only when clubData.clubInfo is not {}({} is default value of state in App, and when it is {} that means it is first render before clicking the crest), that means user clicked the crest*/}
      {isPassedPopsNotEmpty ? (
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
