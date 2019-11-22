import React from "react";

export default function CategoryList(props) {
    console.log(props);
  const clickDivs = eventHandler => {
    eventHandler.preventDefault();
    console.log(eventHandler, "this was clicked");
  };
  return (
    <header className="category-list">
      <div className="category-list__one" onClick={props.button1}>
        Art
      </div>
      <div className="category-list__two" onClick={props.button2}>
        Technology
      </div>
      <div className="category-list__three" onClick={props.button3}>
        Science
      </div>
      <div className="category-list__four" onClick={props.button4}>
        Society
      </div>
      <div className="category-list__five" onClick={props.button5}>
        Health
      </div>
      <div className="category-list__six" onClick={props.button6}>
        Business
      </div>
    </header>
  );
}
