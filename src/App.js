import './App.css';
import Navbar from './components/navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">

        <h1>Welcome to React  |  Me 4 Life</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
