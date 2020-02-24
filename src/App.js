import React from 'react';
import './App.css';
import ListWordsContainer from './Components/ListWords/ListWordsContainer';
import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/Navbar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navbar/>

        <div className='app-wrapper-content'>
           <Route path='/listWords' render={() => <ListWordsContainer/>} />
        </div>

    </div>
  );
}

export default App;
