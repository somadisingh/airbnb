import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="status">{badgeText}</div>}
      <img src={`images/${props.card.coverImg}`} className="swimmer" alt=" " />

      <div className="info">
        <img src={require("../images/star.png")} className="star" alt="" />
        <span>{props.card.stats.rating}</span>
        <span className="gray">
          ({props.card.stats.reviewCount}) • {props.card.location}
        </span>
      </div>

      <div className="info">
        <div>
          <p>{props.card.title}</p>
        </div>

        <div>
          <span>
            <b>From ${props.card.price}</b>
          </span>
          <span>/ person</span>
        </div>
      </div>
    </div>
  );
}
/*Line 6:{props.openSpots === 0 && <div className="status">SOLD OUT</div>}
If openSpots=0 display SOLD OUT*/
