import React from "react";
import Logo from "../assets/white-bg-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="TED Logo" />
      <nav className="header-nav">
        <span className="header-nav__link">Watch</span>
        <span className="header-nav__link">Discover</span>
        <span className="header-nav__link">Participate</span>
        <span className="header-nav__link">About</span>
      </nav>
    </header>
  );
}
