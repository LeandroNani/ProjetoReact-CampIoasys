import React from 'react'
import './Card.css';
import Resume from './Resume.jsx'
import Image from './Image.jsx'
import Buttons from './Buttons.jsx'

function Card() { 

  return (
    <>
    <section id="container">
      <div className="card">
        <Image />
        <Resume />
        <Buttons />


      </div>
    </section>
    </>
  );
}

export default Card;
