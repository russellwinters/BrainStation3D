import React from "react";

export default function CategoryList(props) {
  console.log(props);
  const clickDivs = eventHandler => {
    eventHandler.preventDefault();
    console.log(eventHandler, "this was clicked");
  };
  return (
    <header className="category-list">
      <div className="category-list__title">Organize a Local TEDx Event</div>
      <div className="category-list__popular" onClick={props.populartopics}>
        Popular Topics
      </div>
      <div className="category-list__category" onClick={props.button1}>
        Art & Design
      </div>
      <div className="category-list__category" onClick={props.button2}>
        Technology
      </div>
      <div className="category-list__category" onClick={props.button3}>
        Science
      </div>
      <div className="category-list__category" onClick={props.button4}>
        Society
      </div>
      <div className="category-list__category" onClick={props.button5}>
        Health
      </div>
      <div className="category-list__category" onClick={props.button6}>
        Business
      </div>
    </header>
  );
}
