import React from "react";
import buttonImg from "../../assets/go-button.svg";

export default function category4() {
  return (
    <div className="category">
      <h1 className="category-title">Society</h1>
      <div className="category-content">
        <p className="category-content__description">
          fake words fake words fake words fake words fake words fake words fake
          words fake words fake words fake words fake words fake words fake
          words fake words fake words fake words fake words fake words fake
          words fake words fake words fake words fake words fake words fake
          words fake words fake words fake words
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
