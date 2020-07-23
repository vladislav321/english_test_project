import React, { useState, useEffect } from 'react';
import style from './TranslateWords.module.css';
import {MapStatePropsType, MapDispatchPropsType} from './../../Types/TranslateWords/translate-words-types';

type PropsType = MapStatePropsType & MapDispatchPropsType;

const ListWords: React.FC<PropsType> = ({
    model, getWordFromLessonByNumber, getNextLesson, getPreviusLesson, setWrongWords,
    getNextWord, getPreviusWord}) => {

    let [isShowTranslate, setShowTranslate] = useState(false);
    let [textTranslate, setTextTranslate] = useState("");
    let [resultCheck, setResultCheck] = useState(false);

    useEffect( () => {
        setShowTranslate(false);
        setTextTranslate("");
        setResultCheck(false);
    }, [model] );

   
    const onTextChange = (e: any) => setTextTranslate(e.currentTarget.value);
    const onNextLesson = () => getNextLesson(model.LessonsId);
    const onPreviusLesson = () =>  getPreviusLesson(model.LessonsId);
    const onRepeatLesson = () => getWordFromLessonByNumber(model.LessonsId, 0, model);


    const onShowTranslate = () => {
        setWrongWords(model);
        setShowTranslate(isShowTranslate = !isShowTranslate);
    } 

    const onCheckResult = () => {
        if(textTranslate === model.En)
        {
            if(!isShowTranslate){
                setShowTranslate(true);
            }
            
            if(resultCheck === true || isShowTranslate){
                getWordFromLessonByNumber(model.LessonsId, model.WordsCount, model);
            }

            setResultCheck(true);
        }
        else
            setResultCheck(false);
        }

    const hendleKeyDoew = (e:any) => {
        console.log("e.key: " + e.key)
        if(e.key === 'Enter') onCheckResult();
        // if(e.key === 'ArrowUp') getNextLesson(model.LessonsId);
        // if(e.key === 'ArrowDown') getPreviusLesson(model.LessonsId);
        if(e.key === 'ArrowUp') getNextWord(model.LessonsId, model.WordsCount);
        if(e.key === 'ArrowDown') getPreviusWord(model.LessonsId, model.WordsCount);

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