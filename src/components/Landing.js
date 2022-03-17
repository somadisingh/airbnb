import React from "react";

export default function Landing() {
  return (
    <main>
      <img src={require("../images/grid.png")} alt="" className="photo-grid" />

      <h1 className="title">Hybrid Experiences</h1>
      <p className="byline">
        Join unique interactive activities led by one-of-a-kind hosts—all either
        at exotic locations or at the comfort of your home.
      </p>
    </main>
  );
}
