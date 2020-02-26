import React, { useState } from 'react';
import style from './ListWords.module.css';

const ListWords = (props) => {
    let word = props.model.Ru;

    let [editMode, setEditMode] = useState(false);
    let [textTranslate, setTextTranslate] = useState("");

    const onEditMode = () => {
        let mode = editMode = !editMode;
        setEditMode(mode);
    }

    const onTextChange = (e) => {
        setTextTranslate(e.currentTarget.value);
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
                onChange={ onTextChange }
                placeholder="Enter translate"
                value={ textTranslate }></input>
            <div className={style.btnParent}>
               <button>Sent at check</button>   
            </div>
         
        </div>
    );
}

export default ListWords;