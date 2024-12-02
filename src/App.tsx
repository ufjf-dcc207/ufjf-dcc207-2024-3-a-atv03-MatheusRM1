import Animal from "./Animal";
import "./App.css";

function App() {

  return (
  
  <div className="app">
    <Animal icone="🦁" nome="Leão" peso={190.50} extincao={true}/>
    <Animal icone="🐼" nome="Panda" peso={400.50} extincao={true}/>
    <Animal icone="🦄" nome="Unicornio" peso={500.25} extincao={true}/>
  </div>
  )
}

export default App;
