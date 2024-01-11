import React from "react";
import Avatar from "./avatar";
import Details from "./details";

function Card (props){
    return(
      <div>
        <div className="card">
          <div className="top">
        <p>{props.id}</p>
            <h2 className="name">{props.name}</h2>
            <Avatar 
              img = {props.imgURL}
            />
          </div>
          <div className="bottom">
          <Details
            info = {props.phone}
          />
          <Details
            info = {props.email}
          />
          </div>
        </div>
      </div>
    )
}

export default Card;