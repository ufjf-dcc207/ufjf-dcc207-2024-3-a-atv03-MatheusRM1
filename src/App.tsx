import Animal from "./Animal";
import "./App.css";
import Exibicao from "./Exibicao";

type AnimaisTuplaType = [string, string, number, boolean];
const ANIMAIS: AnimaisTuplaType[] = [
  ["🦁", "Leão", 190.5, true],
  ["🐼", "Panda", 400.5, true],
  ["🦄", "Unicornio", 500.25, true],
  ["🐒", "Macaco", 50.25, false],
];

function App() {
  const exA1: AnimaisTuplaType[] = ANIMAIS.filter(
    (animal) => animal[2] < 200.0
  );

  const exB2: AnimaisTuplaType[] = ANIMAIS.filter(
    (animal) => animal[2] < 200.0
  );

  return (
    <div className="app">
      <Exibicao
        abertura={new Date("2024-12-06T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-06T12:00-03:00")}
        cercado="A1"
      >
        {exA1.map((animal) => (
          <Animal
            key={animal[1]}
            icone={animal[0]}
            nome={animal[1]}
            peso={animal[2]}
            extincao={animal[3]}
          />
        ))}
      </Exibicao>

      <Exibicao
        abertura={new Date("2024-12-06T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-06T17:00-03:00")}
        cercado="B1"
      >
        {exB2.map((animal) => (
          <Animal
            key={animal[1]}
            icone={animal[0]}
            nome={animal[1]}
            peso={animal[2]}
            extincao={animal[3]}
          />
        ))}
      </Exibicao>
    </div>
  );
}

export default App;
