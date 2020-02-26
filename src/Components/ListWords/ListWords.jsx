import React from 'react';
import style from './ListWords.module.css';

const ListWords = (props) => {
  debugger;
    return(
        <div className={style.wordsContainer} >
            <div> WordsRu </div>
            <div> Показать перевод </div>
            <input 
                type="text"
                placeholder="Enter translate"></input>
        </div>
    );
}

export default ListWords;