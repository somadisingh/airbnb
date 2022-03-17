import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Card from "./components/Cards";
import cardData from "./components/Data";

export default function App() {
  const cardElements = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        coverImg={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Landing />
      <section className="cardlist">{cardElements}</section>
    </div>
  );
}
