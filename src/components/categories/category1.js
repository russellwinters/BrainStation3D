import React from "react";
import buttonImg from "../../assets/go-button.svg";

export default function category1() {
  return (
    <div className="category">
      <h1 className="category-title">Art & Design</h1>
      <div className="category-content">
        <p className="category-content__description">
          When you’re a designer you never stop learning. No matter if you’re a
          UX designer, a painter, or you specialize in illustrations or hand
          lettering, there’s always something new to learn. That’s one of the
          best parts of being a part of the creative world.
        </p>
        <p className="category-content__description">
          If you are excited about art & design and want to share your
          creativity, join us on stage by applying to be a speaker!
        </p>
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
    </div>
  );
}
