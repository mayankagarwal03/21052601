import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Calculator numberType="p" windowSize={10}/>
        </p>
      </header>
    </div>
  );
}

export default App;
