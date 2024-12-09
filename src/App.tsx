import { ReactNode } from "react";
import Animal from "./Animal";
import "./App.css";
import Exibicao from "./Exibicao";

function App() {
  const exA1: ReactNode[] = [
    <Animal icone="🦁" nome="Leão" peso={190.5} extincao={true} />,
    <Animal icone="🐼" nome="Panda" peso={400.5} extincao={true} />,
  ];

  const exB2: ReactNode[] = [
    <Animal icone="🦄" nome="Unicornio" peso={500.25} extincao={true} />,
    <Animal icone="🐒" nome="Macaco" peso={50.25} extincao={false} />,
  ];
  return (
    <div className="app">
      <Exibicao
        abertura={new Date("2024-12-06T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-06T12:00-03:00")}
        cercado="A1"
      >
        {exA1}
      </Exibicao>

      <Exibicao
        abertura={new Date("2024-12-06T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-06T17:00-03:00")}
        cercado="B1"
      >
        {exB2}
      </Exibicao>
    </div>
  );
}

export default App;
