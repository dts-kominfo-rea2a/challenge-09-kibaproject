// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data: { name, phone, email, photo } }) => {
  return (
    <div className="contact">
      <div className="left">
        <img src={photo} alt={name} />
      </div>
      <div className="right">
        <div>
          <h2>{name}</h2>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
