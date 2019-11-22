import React from "react";

export default function CategoryList() {
  const clickDivs = eventHandler => {
    eventHandler.preventDefault();
    console.log(eventHandler, "this was clicked");
  };
  return (
    <header className="category-list">
      <div className="category-list__one" onClick={clickDivs}>
        Art & Design
      </div>
      <div className="category-list__two" onClick={clickDivs}>
        Technology
      </div>
      <div className="category-list__three" onClick={clickDivs}>
        Science
      </div>
      <div className="category-list__four" onClick={clickDivs}>
        Society
      </div>
      <div className="category-list__five" onClick={clickDivs}>
        Health
      </div>
      <div className="category-list__six" onClick={clickDivs}>
        Business
      </div>
    </header>
  );
}
