import logo from './logo.svg';
import './App.css';
import {Modal} from './Modal';
import {useState} from 'react';

function App() {
  let [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <button onClick={()=>{setShowModal(true)}}>Show Modal</button>
        <Modal display={showModal} handleClose={()=>{setShowModal(false)}}/>
      </header>
    </div>
  );
}

export default App;
