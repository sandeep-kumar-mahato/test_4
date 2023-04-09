import React, { useState } from "react";
import "./questions.css";

const Questions = () => {
  const [question1Answer, setQuestion1Answer] = useState("");
  const [question2Answer, setQuestion2Answer] = useState("");

  const handleQuestion1Change = (event) => {
    setQuestion1Answer(event.target.value);
  };

  const handleQuestion2Change = (event) => {
    setQuestion2Answer(event.target.value);
  };

  return (
    <div className="section">
      <div>
        <h2>
          Q1: What is your most frequently used means of travel from your home
          to work location?
        </h2>
        <label>
          <input
            type="radio"
            value="Bus"
            checked={question1Answer === "Bus"}
            onChange={handleQuestion1Change}
          />
          Bus
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Metro"
            checked={question1Answer === "Metro"}
            onChange={handleQuestion1Change}
          />
          Metro
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Own Two-wheeler"
            checked={question1Answer === "Own Two-wheeler"}
            onChange={handleQuestion1Change}
          />
          Own Two-wheeler
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Own Car"
            checked={question1Answer === "Own Car"}
            onChange={handleQuestion1Change}
          />
          Own Car
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Walk / Bicycle"
            checked={question1Answer === "Walk / Bicycle"}
            onChange={handleQuestion1Change}
          />
          Walk / Bicycle
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Auto"
            checked={question1Answer === "Auto"}
            onChange={handleQuestion1Change}
          />
          Auto
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="App based ride hailing cab services including Ola / Uber"
            checked={
              question1Answer ===
              "App based ride hailing cab services including Ola / Uber"
            }
            onChange={handleQuestion1Change}
          />
          App based ride hailing cab services including Ola / Uber
        </label>
      </div>
      <div>
        <h2>Q2: What is the total distance between your home and workplace?</h2>
        <label>
          <input
            type="radio"
            value="less than 5 km"
            checked={question2Answer === "less than 5 km"}
            onChange={handleQuestion2Change}
          />
          &#60; 5 km
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="5 - 10 km"
            checked={question2Answer === "5 - 10 km"}
            onChange={handleQuestion2Change}
          />
          5 - 10 km
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="10- 15 km"
            checked={question2Answer === "10- 15 km"}
            onChange={handleQuestion2Change}
          />
          10- 15 km
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="15- 20 km"
            checked={question2Answer === "15- 20 km"}
            onChange={handleQuestion2Change}
          />
          15- 20 km
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="20- 25 km"
            checked={question2Answer === "20- 25 km"}
            onChange={handleQuestion2Change}
          />
          20- 25 km
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="greater than 20- 25 km"
            checked={question2Answer === "greater than 20- 25 km"}
            onChange={handleQuestion2Change}
          />
          &#62; 20- 25 km
        </label>
        <br />
      </div>
      <div className="btn">
        <button type="Submit">Submit</button>
      </div>
    </div>
  );
};

export default Questions;
