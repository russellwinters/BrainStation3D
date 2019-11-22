import React, { Component } from "react";
import CategoryList from "./CategoryList";
import CategoryInfo from "./CategoryInfo";

export default class PopularTopics extends Component {
  state = {
    category1: false,
    category2: false,
    category3: true,
    category4: false,
    category5: false
  };

  render() {
    return (
      <section className="topics">
        <CategoryList />
        <CategoryInfo current={this.state} />
      </section>
    );
  }
}
