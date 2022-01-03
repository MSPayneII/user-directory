import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import "../ButtonGroup/ButtonGroup.css";

const ButtonGroup = ({ prevPerson, nextPerson }) => {
  return (
    <section className="btn-container">
      <button className="prev-btn" onClick={prevPerson}>
        <MdChevronLeft size={20} />
        Previous
      </button>

      <div>
        <button className="crud-btn">Edit</button>
        <button className="crud-btn">Delete</button>
        <button className="crud-btn">New</button>
      </div>

      <button className="next-btn" onClick={nextPerson}>
        Next <MdChevronRight size={20} />
      </button>
    </section>
  );
};

export default ButtonGroup;
