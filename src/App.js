import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Card from "./components/Cards";
import cardData from "./components/Data";

export default function App() {
  const cardElements = cardData.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div>
      <Navbar />
      <Landing />
      <section className="cardlist">{cardElements}</section>
    </div>
  );
}
