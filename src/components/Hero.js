import React from "react";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <header className="hero">
      <img className="hero-image" src={heroImg} alt="hero" />
    </header>
  );
}
