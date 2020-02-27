import React, { useState, useEffect } from 'react';
import style from './TranslateWords.module.css';

const ListWords = (props) => {
 
    let lesson = !props.model ? "---" : props.model.Lessons;
    let wordsCount = !props.model ? 0 : props.model.WordsCount;
    let word = !props.model ? "---" : props.model.Ru;
    let wordTranslate = !props.model ? "---" : props.model.En;
   
  
    let [editMode, setEditMode] = useState(false);
    let [textTranslate, setTextTranslate] = useState("");
    let [resultCheck, setResultCheck] = useState(true);


    useEffect( () => {
        setEditMode(false);
        setTextTranslate("");
        setResultCheck(true);
    }, [props.model] );

    const onEditMode = () => {
        let mode = editMode = !editMode;
        setEditMode(mode);
    }

    const onTextChange = (e) => {
        setTextTranslate(e.currentTarget.value);
    }

    const onCheckResult = () => {
        if(!props.model) return;
     
        if(textTranslate === wordTranslate)
        {
            props.getWordFromLessonByNumber(lesson, wordsCount + 1);
        }else{
            setResultCheck(false);
        }
    }
    
    return(
        <div className={style.wordsContainer} >
            <div className={style.wordText}> 
                 {word} 
            </div>
            <div className={style.wordTranslate} onDoubleClick={onEditMode}>
                {!editMode ? "Показать перевод" : wordTranslate}
            </div>


            <input 
                type="text"
                onChange={ onTextChange }
                placeholder="Enter translate"
                value={ textTranslate }></input>

            <div className={style.btnParent}>
               <button className={resultCheck ?style.btnParrentSuccses : style.btnParentError} onClick={onCheckResult}>Sent at check</button>   
            </div>
         
        </div>
    );
}

export default ListWords;