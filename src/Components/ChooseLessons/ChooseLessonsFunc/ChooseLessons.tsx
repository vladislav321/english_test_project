import React from 'react';
import ItemLessons from './ItemLessons';
import style from './ChooseLessons.module.css';
import {MapStatePropsType} from './../../../Types/ListLessons/lessons-types';

type PropsType = MapStatePropsType;

const ChooseLessons: React.FC<PropsType> = ({sortListLessons}) => {
        let listLessons = sortListLessons.map( p => 
            <ItemLessons 
                lesson={p.Lessons}
                lessonId={p.LessonsId} 
                key={p.Id}/>);

        return(
            <div className={style.scroolBlock}>
               { listLessons }
            </div>
        );

}

export default ChooseLessons;