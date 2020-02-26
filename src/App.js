import React from 'react';
import './App.css';
import ListWordsContainer from './Components/ListWords/ListWordsContainer';
import Header from './Components/Header/HeaderFunc/Header';
import Navbar from './Components/NavBar/Navbar';
import { Route } from 'react-router-dom';
import ChooseLessonsContainer from './Components/ChooseLessons/ChooseLessonsContainer';

function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navbar/>

        <div className='app-wrapper-content'>
           <Route path='/listWords/:lesson?' render={() => <ListWordsContainer/>} />
           <Route path='/chooseLessons' render={() => <ChooseLessonsContainer/>}/>
        </div>

    </div>
  );
}

export default App;
