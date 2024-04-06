import React from "react";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      <hr />
      <h2>What device is required for the Internet Connection?</h2>
      <ul>
        <li>Modem</li>
        <li>Router</li>
        <li>Land cable</li>
        <li>Pen Drive</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
};

export default Quiz;
