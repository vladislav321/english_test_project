import React, { useState, useEffect } from 'react';
import style from './../ListWords/TranslateWords.module.css';
import {MapStatePropsType, MapDispatchPropsType} from './../../Types/TranslateWords/translate-words-types';

type PropsType = MapStatePropsType & MapDispatchPropsType;

const ReversTranslate: React.FC<PropsType> = ({
    model, getWordFromLessonByNumber, getNextLesson, getPreviusLesson, setWrongWords,
    getNextWord, getPreviusWord}) => {

    let [isShowTranslate, setShowTranslate] = useState(false);
    let [textLessonId, setLessonId] = useState("");

    useEffect( () => {
        setShowTranslate(false);
        setLessonId("");
    }, [model] );

   
    const onTextChange = (e: any) => setLessonId(e.currentTarget.value);
    const onNextLesson = () => getNextLesson(model.LessonsId);
    const onPreviusLesson = () =>  getPreviusLesson(model.LessonsId);
    const onRepeatLesson = () => getWordFromLessonByNumber(model.LessonsId, 0, model);


    const onShowTranslate = () => {
        setWrongWords(model);
        setShowTranslate(isShowTranslate = !isShowTranslate);
    } 

    const onCheckResult = () => { 
        let lessonId = (parseInt(textLessonId) - 1)
        getNextLesson(lessonId);
    }

    const hendleKeyDoew = (e:any) => {
        if(e.key === 'Enter') onCheckResult();
        if(e.key === 'ArrowUp') getNextLesson(model.LessonsId);
        if(e.key === 'ArrowDown') getPreviusLesson(model.LessonsId);
        if(e.key === 'ArrowRight') getNextWord(model.LessonsId, model.WordsCount);
        if(e.key === 'ArrowLeft') getPreviusWord(model.LessonsId, model.WordsCount);

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
                 {model.En} 
            </div>
            <div className={style.wordTranslate} onDoubleClick={onShowTranslate}>
                {!isShowTranslate ? "Показать перевод" : model.Ru}
            </div>


            <input 
                type="text"
                onChange={ onTextChange }
                placeholder="Enter number lessonId"
                onKeyDown={ hendleKeyDoew }
                value={ textLessonId }></input>

            <div className={style.btnParent}>
               <button className={style.btnParrentSuccses} onClick={onCheckResult}>Change LessonId</button>   
            </div>
         
        </div>
    );
}

export default ReversTranslate;