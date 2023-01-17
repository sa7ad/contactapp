import React from "react";
import Card from "./Card";
import contacts from "../Contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return <Card
    id={contact.id}
    key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
    />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://i.postimg.cc/d1WtKmd8/Whats-App-Image-2023-01-17-at-14-11-59.jpg"/>
      {contacts.map(createCard)}
      {/* <Card name={contacts[0].name}
      img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
       <Card name={contacts[1].name}
      img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
       <Card name={contacts[2].name}
      img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
