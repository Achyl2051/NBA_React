import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import StatComponent from "./components/StatComponent";
import ResultatComponent from "./components/ResultatComponent";

function App() {
  return (
      <div className="App">
        <ResultatComponent/>
        <StatComponent/>
      </div>
  );
}

export default App;
