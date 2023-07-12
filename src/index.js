import React from "react";
import ReactDOM from "react-dom";

let timeofDay;
const date = new Date(2023, 1, 1, 10);
const hours = date.getHours();
const customStyle = {
  color: ""
};

if (hours < 12) {
  timeofDay = "Good Morning";
  customStyle.color = "red";
} else if (hours >= 12 && hours < 17) {
  timeofDay = "Good Afternoon";
  customStyle.color = "blue";
} else {
  timeofDay = "Good Night";
  customStyle.color = "green";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {timeofDay} Chris
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.....
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
