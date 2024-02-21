//import logo es el logo de react ya venia cuando se creó el proyecto
//import logo from './logo.svg';
import './App.css';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> PRUEBA PARA CONFIRMAR QUE FUNCIONA CARPETA PUBLIC :3 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React aiuda
        </a>
      </header>
    </div>
  );
}

export default App;
*/

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/> 
        <RightSide/>
      </div>
    </div>
  );
}

export default App;

