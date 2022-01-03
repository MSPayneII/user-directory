import React, { useState } from "react";

import Header from "./Header/Header";
import PersonCard from "./PersonCard/PersonCard";
import ButtonGroup from "./ButtonGroup/ButtonGroup";
import data from "../data";

import "./App.css";

function App() {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <main className="App">
      <Header />

      <PersonCard {...people[index]} />
      <ButtonGroup prevPerson={prevPerson} nextPerson={nextPerson} />
    </main>
  );
}

export default App;
