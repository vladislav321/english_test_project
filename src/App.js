import React from 'react';
import './App.css';
import ListWordsContainer from './Components/ListWords/ListWordsContainer';
import Navbar from './Components/NavBar/Navbar';
import { Route } from 'react-router-dom';
import ChooseLessonsContainer from './Components/ChooseLessons/ChooseLessonsContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

function App() {
  return (
    <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>

        <div className='app-wrapper-content'>
           <Route path='/listWords/:lesson?' render={() => <ListWordsContainer/>} />
           <Route path='/chooseLessons' render={() => <ChooseLessonsContainer/>}/>
        </div>

    </div>
  );
}

export default App;
