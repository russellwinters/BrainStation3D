import React from "react";
import buttonImg from "../../assets/go-button.svg";

export default function category6() {
  return (
    <div className="category">
      <h1 className="category-title">Business</h1>
      <div className="category-content">
        <p className="category-content__description">
          Ask anyone at the top of their field how they got there or how they
          found success in business, and chances are you’ll find overlapping
          patterns of hard work, long hours, and—perhaps most
          important—continual self-education. We invite engaging experts, and
          even if they don’t always have big names, they’re excellent guests who
          offer valuable insight.
        </p>
        <p className="category-content__description">
          If you are an expert and want to share your story, join us on our TEDx
          stage and make a difference!
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
