import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
    ];
  }
    render () {
    return (
    <div>
      <img src={require('./assets/Biscoito.jpeg')} alt ="Biscoito"></img>
      <Botao />
      <h3>Frases aleatória...</h3>
    </div>
    );
  }
}
  class Botao extends Component {
    render(){
      return(
        <div>
          <button>Abrir Biscoito</button>
        </div>
      );
    }
  }

export default App;
