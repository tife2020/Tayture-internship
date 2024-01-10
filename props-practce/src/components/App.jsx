import React from "react";
import Contacts from "../contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        name= {Contacts[1].name}
        imgURL= {Contacts[1].imgURL}
        phone= {Contacts[1].phone}
        email= {Contacts[1].email}
      />

      <Card
        name= {Contacts[2].name}
        imgURL= {Contacts[2].imgURL}
        phone= {Contacts[2].phone}
        email= {Contacts[2].email}
      />

      <Card
        name= {Contacts[3].name}
        imgURL= {Contacts[3].imgURL}
        phone= {Contacts[3].phone}
        email= {Contacts[3].email}
      />
    </div>
  );
}

export default App;
