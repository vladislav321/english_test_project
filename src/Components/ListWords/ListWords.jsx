import React, { useState } from 'react';
import style from './ListWords.module.css';

const ListWords = (props) => {
    let word = props.model.Ru;

    let [editMode, setEditMode] = useState(false);

    const onEditMode = () => {
        let mode = editMode = !editMode;
        setEditMode(mode);
    }
    
    return(
        <div className={style.wordsContainer} >
            <div className={style.wordText}> 
                 {word} 
            </div>
            <div className={style.wordTranslate} onDoubleClick={onEditMode}>
                {!editMode ? "Показать перевод" : props.model.En}
            </div>

            <input 
                type="text"
                placeholder="Enter translate"></input>
        </div>
    );
}

export default ListWords;