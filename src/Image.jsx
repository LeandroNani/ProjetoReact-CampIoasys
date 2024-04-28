import React from 'react'
import './Card.css';
import imagem from "./assets/unnamed.jpg";

function image() { 

  return (
    <>
        <div className="image">
          <img src={imagem} alt=""></img>
        </div>
    </>
  );
}

export default image;
