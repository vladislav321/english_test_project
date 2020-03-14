import React, { useState, useEffect } from 'react';
import style from './TranslateWords.module.css';
import {MapStatePropsType, MapDispatchPropsType} from './../../Types/TranslateWords/translate-words-types';

type PropsType = MapStatePropsType & MapDispatchPropsType;

const ListWords: React.FC<PropsType> = ({
    model, getWordFromLessonByNumber, getNextLesson, getPreviusLesson, getFirstModel}) => {

    let [isShowTranslate, setShowTranslate] = useState(false);
    let [textTranslate, setTextTranslate] = useState("");
    let [resultCheck, setResultCheck] = useState(true);

    useEffect( () => {
        setShowTranslate(false);
        setTextTranslate("");
        setResultCheck(true);
    }, [model] );

    const onShowTranslate = () => setShowTranslate(isShowTranslate = !isShowTranslate);
    const onTextChange = (e: any) => setTextTranslate(e.currentTarget.value);
    const onNextLesson = () => getNextLesson(model.LessonsId);
    const onPreviusLesson = () =>  getPreviusLesson(model.LessonsId);
    const onRepeatLesson = () => getWordFromLessonByNumber(model.LessonsId, 0);

    const onCheckResult = () => {
        if(textTranslate === model.En)
        {
            getWordFromLessonByNumber(model.LessonsId, model.WordsCount);
        }
        else
            setResultCheck(false);
        }

    const hendleKeyDoew = (e:any) => {
        if(e.key === 'Enter') onCheckResult();
    }
    
    return(
        <div className={style.wordsContainer} >

            <div className={style.lessonTitle}>
                <span>
                    Lesson: {model.Lessons}
                </span>
            </div>

            <div className={style.containerLessons}>
                <button onClick={onPreviusLesson}>Previus lesson</button>
                <button onClick={onRepeatLesson}>Repeat lesson</button>
                <button onClick={onNextLesson}>Next lesson</button>
            </div>

            <div className={style.wordText}> 
                 {model.Ru} 
            </div>
            <div className={style.wordTranslate} onDoubleClick={onShowTranslate}>
                {!isShowTranslate ? "Показать перевод" : model.En}
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