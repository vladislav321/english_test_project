import React from 'react';
import ItemLessons from './ItemLessons';
import style from './ChooseLessons.module.css';

const ChooseLessons = (props) => {
        let listLessons = props.sortListLessons.map( p => 
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