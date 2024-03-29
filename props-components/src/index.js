import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";

ReactDOM.render(
  <div>
    <Card 
      name = 'Beyonce'
      img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel = "+123 456 789"
      email ="b@beyonce.com"
          />

    <Card 
      name = 'Jack Bauer'
      img = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel = "+987 654 321"
      email ="jack@nowhere.com"
          />
  </div>,
  document.getElementById("root")
);
