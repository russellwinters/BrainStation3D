import React from "react";
import Header from "./components/Header";
import PopularTopics from "./components/PopularTopics";
<<<<<<< HEAD
import CreateNew from "./components/CreateNew";

=======
import Charts from "./components/Charts";
import ChartsTwo from "./components/ChartsTwo";
import MedianViews from "./components/MedianViews";
import mediandata from "./data/median";
import medianviews from "./data/medianviews";
import topcategoriesdata from "./data/topcategoriesdata";
import { Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
>>>>>>> 4205522b728914b483724aee3c0555f7780c9656
function App() {
  return (
    <>
      <Header />
      <Hero />
      <PopularTopics />
<<<<<<< HEAD
      <CreateNew />
=======
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
>>>>>>> 4205522b728914b483724aee3c0555f7780c9656
    </>
  );
}

export default App;
