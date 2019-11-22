import React from "react";
import buttonImg from "../../assets/go-button.svg";

export default function firstcategory() {
  return (
    <div className="category">
      <h1 className="category-title">Popular Topics</h1>
      <div className="category-content">
        <p className="category-content__description">
          The world is changing faster than ever. Researchers estimate that
          technology and automation will replace half of existing jobs over the
          next decade. Technology affects everyone because whether or not we
          work at a technology company, we’re still affected by the digital
          world.
        </p>
        <p className="category-content__description">
          Join us on stage if you are passionate about anything technology
          related and spread your knowledge!
        </p>
      </div>
      <div className="category-button">
        <img
          className="category-button__img"
          src={buttonImg}
          alt="Go to popular topics"
        />
        <span className="category-button__explore">
          Explore Topics of Interest
        </span>
      </div>
    </div>
  );
}
