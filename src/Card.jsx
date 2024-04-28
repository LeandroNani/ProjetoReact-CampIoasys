import React from 'react'
import './Card.css';

function Card() { 

  return (
    <>
    <section id="container">
      <div className="card">
        <div className="image">
          <img src="projetoReact24-o4\src\assets\unnamed.jpg" alt=""></img>
        </div>
        <div id="sobre">
          <h2>Leandro Pacheco</h2>
          <p>Belo Horizonte, Minas Gerais</p>
        </div>
        <p className="sobre">Estudante em Engenharia de Software</p>
        <div id="botoes">
          <div id="botoes">
            <button>
              <a href="https://github.com/LeandroNani" target="_blank">
                <p>Github</p>
              </a>
            </button>
            <button>
              <a href="https://www.google.com" target="_blank">
                <p>Front End Mentor</p>
              </a>
            </button>
            <button>
              <a href="https://www.linkedin.com/in/leandropacheco02/" target="_blank">
                <p>Linkedin</p>
              </a>
            </button>
            <button>
              <a href="https://twitter.com/LeandrocPacheco" target="_blank">
                <p>Twitter</p>
              </a>
            </button>
            <button>
              <a href="https://www.instagram.com/leandro.cpacheco/" target="_blank">
                <p>Instagram</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Card;
