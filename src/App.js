import logo from './logo.svg';
import './App.css';
import PayUnitComponent from './payunit/payunit';
import React,{useState,useRef, useEffect} from 'react';
import ReactMapGL from 'react-map-gl';

 
function App() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude:  4.2046,
    longitude: 9.4977,
    zoom: 100, 
    height:window.innerHeight,
    width:window.innerWidth
  });
  let accessToken = 'pk.eyJ1Ijoib2Jl************************8';

  return (
    <div >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <PayUnitComponent></PayUnitComponent> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}<ReactMapGL
      {...viewport} mapboxApiAccessToken={accessToken} 
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
    </div>
  );
}

export default App;
