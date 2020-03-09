import React from 'react';
import style from './ChooseLessons.module.css';
import { NavLink } from 'react-router-dom';
import ProgressIndicators from '../../common/ProgressIdicators/ProgressIndicators';

const ItemLessons = ({lessonId, lesson}) => {

    console.log(lessonId + " , " + lesson);

    return(
        <div className={style.lessonsItem}>
            <NavLink to={'/listWords/' + lessonId}>
                <div className={style.textBlock}>
                    <span>
                        {lesson}
                    </span>
                </div>
            </NavLink>
            <div  className={style.progressIndecator} >
                <ProgressIndicators  />
            </div>
           
        </div>
    );

}

export default ItemLessons;