import React, { useState, useEffect } from 'react';
import style from './TranslateWords.module.css';

const ListWords = (props) => {
  
    let lesson = !props.model ? "---" : props.model.Lessons;
    let wordsCount = !props.model ? 0 : props.model.WordsCount;
    let word = !props.model ? "---" : props.model.Ru;
    let wordTranslate = !props.model ? "---" : props.model.En;
    let lessonId = !props.model ? 0 : props.model.LessonsId;
  
    let [isShowTranslate, setShowTranslate] = useState(false);
    let [textTranslate, setTextTranslate] = useState("");
    let [resultCheck, setResultCheck] = useState(true);

    useEffect( () => {
        setShowTranslate(false);
        setTextTranslate("");
        setResultCheck(true);
    }, [props.model] );

    const onShowTranslate = () => setShowTranslate(isShowTranslate = !isShowTranslate);
    const onTextChange = (e) => setTextTranslate(e.currentTarget.value);
    const onNextLesson = () => props.getNextLesson(lessonId);
    const onPreviusLesson = () =>  props.getPreviusLesson(lessonId);
    const onRepeatLesson = () => props.getWordFromLessonByNumber(lessonId, 0);

    const onCheckResult = () => {
        if(textTranslate === wordTranslate)
        {
            props.getWordFromLessonByNumber(lessonId, wordsCount);
        }
        else
            setResultCheck(false);
        }

    const hendleKeyDoew = (e) => {
        if(e.key === 'Enter') onCheckResult();
    }
    
    return(
        <div className={style.wordsContainer} >

            <div className={style.lessonTitle}>
                <span>
                    Lesson: {lesson}
                </span>
            </div>

            <div className={style.containerLessons}>
                <button onClick={onPreviusLesson}>Previus lesson</button>
                <button onClick={onRepeatLesson}>Repeat lesson</button>
                <button onClick={onNextLesson}>Next lesson</button>
            </div>

            <div className={style.wordText}> 
                 {word} 
            </div>
            <div className={style.wordTranslate} onDoubleClick={onShowTranslate}>
                {!isShowTranslate ? "Показать перевод" : wordTranslate}
            </div>


            <input 
                type="text"
                onChange={ onTextChange }
                placeholder="Enter translate"
                onKeyDown={ hendleKeyDoew }
                value={ textTranslate }></input>

            <div className={style.btnParent}>
               <button className={resultCheck ?style.btnParrentSuccses : style.btnParentError} onClick={onCheckResult}>Sent at check</button>   
            </div>
         
        </div>
    );
}

export default ListWords;