import React from "react";
import buttonImg from "../../assets/go-button.svg";

export default function category5() {
  return (
    <div className="category">
      <h1 className="category-title">Health</h1>
      <div className="category-content">
        <p className="category-content__description">
          Health is wealth - however busy people who want to stay on top of
          healthcare industry developments, innovations, and the latest news may
          not be devoting or educating themselves as much as they should be.
        </p>
        <p className="category-content__description">
          We want to hear about your expertise regarding anything health
          related, whether it be diet, disease, mental health... and the list
          goes on - apply to be a speaker on our TEDx stage
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
