import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { Route } from 'react-router-dom';
import ChooseLessonsContainer from './Components/ChooseLessons/ChooseLessonsContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import TranslateWordsContainer from './Components/ListWords/TranslateWordsContainer';
import ReversTranslateContainer from './Components/TranslateFromEnIntoRu/ReversTranslateContainer';

function App() {
  return (
    <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>

        <div className='app-wrapper-content'>
           <Route path='/translateWords/:lesson?' render={() => <TranslateWordsContainer/>} />
           <Route path='/chooseLessons' render={() => <ChooseLessonsContainer/>}/>
           <Route path='/inCorrectWords/:type?' render={() => <TranslateWordsContainer/>} />
           <Route path='/reversTranslate/:lesson?' render={() => <ReversTranslateContainer/>} />
        </div>

    </div>
  );
}

export default App;
