import React from "react";
import buttonImg from "../../assets/go-button.svg";

export default function category4() {
  return (
    <div className="category">
      <h1 className="category-title">Society</h1>
      <div className="category-content">
        <p className="category-content__description">
          TEDx is a platform that encourages the exploration of everything -
          religion, gender identity, war, family, parenthood, drugs, social
          media... and so much more. Tell your story on our stage, a safe place
          to be vulnerable. We're here for it all and here to make our world a
          better one, one TEDx event at a time.
        </p>
        <p className="category-content__description">
          If you want to share your story, apply to be a speaker!
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
