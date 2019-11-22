import React, { Component } from "react";
import CategoryList from "./CategoryList";
import CategoryInfo from "./CategoryInfo";

export default class PopularTopics extends Component {
  state = {
    category1: false,
    category2: false,
    category3: false,
    category4: false,
    category5: false,
    category6: false,
    popularinfo: true
  };

  category1state = () => {
    this.setState({
      category1: true,
      category2: false,
      category3: false,
      category4: false,
      category5: false,
      category6: false,
      popularinfo: false
    });
  };
  category2state = () => {
    this.setState({
      category1: false,
      category2: true,
      category3: false,
      category4: false,
      category5: false,
      category6: false,
      popularinfo: false
    });
  };
  category3state = () => {
    this.setState({
      category1: false,
      category2: false,
      category3: true,
      category4: false,
      category5: false,
      category6: false,
      popularinfo: false
    });
  };
  category4state = () => {
    this.setState({
      category1: false,
      category2: false,
      category3: false,
      category4: true,
      category5: false,
      category6: false,
      popularinfo: false
    });
  };
  category5state = () => {
    this.setState({
      category1: false,
      category2: false,
      category3: false,
      category4: false,
      category5: true,
      category6: false,
      popularinfo: false
    });
  };
  category6state = () => {
    this.setState({
      category1: false,
      category2: false,
      category3: false,
      category4: false,
      category5: false,
      category6: true,
      popularinfo: false
    });
  };
  populartopicsstate = () => {
    this.setState({
      category1: false,
      category2: false,
      category3: false,
      category4: false,
      category5: false,
      category6: false,
      popularinfo: true
    });
  };

  render() {
    return (
      <section className="topics">
        <CategoryList
          button1={this.category1state}
          button2={this.category2state}
          button3={this.category3state}
          button4={this.category4state}
          button5={this.category5state}
          button6={this.category6state}
          populartopics={this.populartopicsstate}
        />
        <CategoryInfo current={this.state} />
      </section>
    );
  }
}
