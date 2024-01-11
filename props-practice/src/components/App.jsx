import React from "react";
import Contacts from '../contacts';
import Card from "./Card";

function App() {
  console.log(Contacts)
  return (
    
    <div>  
      <h1 className="heading">My Contacts</h1>

      {Contacts.map((contact) => {
        return(
          <Card
            key = {contact.id}
            id = {contact.id}
            name = {contact.name}
            imgURL = {contact.imgURL}
            phone = {contact.phone}
            email = {contact.email}
          />
        )
      })}

    </div>
  );
}

export default App;
