import './App.css';
import JsonFetch from './components/JsonFetch';


function App() {

  return (
    <div className="App">
      <JsonFetch url="http://localhost:7071/data" />
      <JsonFetch url="http://localhost:7071/error" />
      <JsonFetch url="http://localhost:7071/loading" />
    </div>
  );
}

export default App;
