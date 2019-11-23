import React from "react";
import buttonImg from "../../assets/go-button.svg";

export default function firstcategory() {
  return (
    <div className="category">
      <h1 className="category-title">Popular Topics</h1>
      <div className="category-content">
        <p className="category-content__description">
          Think of TEDx as hosting an awesome dinner party, with great food,
          inspirational videos, brilliant speakers and mind-blowing
          conversation. By organizing a TEDx event, you will have the
          opportunity to create a truly unique event that will unleash new
          ideas, inspire and inform.
        </p>
        <p className="category-content__description">
          A TEDx event is a local gathering where live TED-like talks and
          performances are shared with the community. TEDx events are fully
          planned and coordinated independently, on a community-by-community
          basis. The content and design of each TEDx event is unique and
          developed independently, but all of them have features in common.
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
