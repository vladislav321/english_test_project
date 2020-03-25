import React from 'react';
import ItemLessons from './ItemLessons';
import style from './ChooseLessons.module.css';
import {MapStatePropsType} from './../../../Types/ListLessons/lessons-types';

type PropsType = MapStatePropsType;

const ChooseLessons: React.FC<PropsType> = ({sortListLessons}) => {
    console.log(sortListLessons)
        let listLessons = sortListLessons.map( p => 
            <ItemLessons 
                lesson={p.Lesson}
                lessonId={p.LessonId} 
                key={p.Id}
                percent={p.Percent}/>);

        return(
            <div className={style.scroolBlock}>
               { listLessons }
            </div>
        );

}

export default ChooseLessons;