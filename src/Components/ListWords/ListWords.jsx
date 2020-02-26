import React from 'react';
import style from './ListWords.module.css';

const ListWords = (props) => {
    let word = props.model.Ru;

 
    return(
        <div className={style.wordsContainer} >
            <div className={style.wordText}> 
                 {word} 
            </div>
            <div className={style.wordTranslate}>
                 Показать перевод 
            </div>

            <input 
                type="text"
                placeholder="Enter translate"></input>
        </div>
    );
}

export default ListWords;