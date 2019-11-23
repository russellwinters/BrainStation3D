import React from "react";
import Header from "./components/Header";
import PopularTopics from "./components/PopularTopics";
import Charts from "./components/Charts";
import ChartsTwo from "./components/ChartsTwo";
import MedianViews from "./components/MedianViews";
import mediandata from "./data/median";
import medianviews from "./data/medianviews";
import topcategoriesdata from "./data/topcategoriesdata";
import { Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import CreateNew from "./components/CreateNew";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <PopularTopics />
      <Switch>
        <Route
          path="/"
          exact
          render={props => <Charts data={topcategoriesdata} {...props} />}
        />
        <Route
          path="/median"
          exact
          render={props => <ChartsTwo data={mediandata} {...props} />}
        />
        <Route
          path="/medianviews"
          exact
          render={props => <MedianViews data={medianviews} {...props} />}
        />
      </Switch>
      <CreateNew />
    </>
  );
}

export default App;
