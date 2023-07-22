import logo from './logo.svg';
import './App.css';
import Record from './components/Record';
import Table from './components/Table';

function App() {
  return (
    <>
    <Record record={Table}/>
    </>
  );
}

export default App;
