import React from 'react'
import './Card.css';

function Buttons() { 

  const data = [
    {
      name: "Github",
      link: "https://github.com/LeandroNani",
    },
    {
      name: "Front End Mentor",
      link: "https://github.com/francisko-rezende",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/leandropacheco02/",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/LeandrocPacheco",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/leandro.cpacheco/",
    },
  ];

  return (
    <>
    
        <div id="botoes">
          <div id="botoes">

          {data.map(function (item) {
            return (
              <button key={item.name}>
              <a href="{item.link}" target="_blank">
                <p>{item.name}</p>
              </a>
            </button>

            );
          })}
          </div>
        </div>
    </>
  );
}

export default Buttons