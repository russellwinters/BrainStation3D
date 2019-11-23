import React from "react";
import buttonImg from "../../assets/go-button.svg";

export default function category3() {
  return (
    <div className="category">
      <h1 className="category-title">Science</h1>
      <div className="category-content">
        <p className="category-content__description">
          Research and science is always changing, whether it is natural
          sciences, social sciences, behavioural sciences or applied sciences -
          there is endless information to be taught and shared.
        </p>
        <p className="category-content__description">
          TEDx is interested in exploring all aspects of science for continuous
          learning, not only on our stage but for our future.
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
