import React from "react";
import Header from "./components/Header";
import PopularTopics from "./components/PopularTopics";
import CreateNew from "./components/CreateNew";

function App() {
  return (
    <>
      <Header />
      <PopularTopics />
      <CreateNew />
    </>
  );
}

export default App;
