import Animal from "./Animal";
import "./App.css";
import EXIBICOES from "./assets/exibicoes";
import Exibicao from "./Exibicao";



function App() {

  return (
    <div className="app">
      {EXIBICOES.map((exibicao) => (
        <Exibicao
        key={exibicao[0]}
        abertura={new Date(exibicao[1])}
        fechamento={new Date(exibicao[2])}
        cercado={exibicao[0]}
      >
        {exibicao[3].map((animal) => (
          <Animal
          key={animal[1]}
          icone={animal[0]}
          nome={animal[1]}
          peso={animal[2]}
          extincao={animal[3]}
        />
        ))}
          </Exibicao>
      ))}
    </div>
  );
}

export default App;
