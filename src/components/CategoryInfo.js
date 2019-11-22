import React, { Component } from "react";
import Category1 from "./categories/category1";
import Category2 from "./categories/category2";
import Category3 from "./categories/category3";
import Category4 from "./categories/category4";
import Category5 from "./categories/category5";

export default class CategoryInfo extends Component {
  render() {
    console.log(this.props.current);
    if (this.props.current.category1 === true) {
      return <Category1 />;
    }
    if (this.props.current.category2 === true) {
      return <Category2 />;
    }
    if (this.props.current.category3 === true) {
      return <Category3 />;
    }
    if (this.props.current.category4 === true) {
      return <Category4 />;
    }
    if (this.props.current.category5 === true) {
      return <Category5 />;
    }
  }
}
