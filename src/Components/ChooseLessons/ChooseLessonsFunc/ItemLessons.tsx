import React from 'react';
import style from './ChooseLessons.module.css';
import { NavLink } from 'react-router-dom';
import ProgressIndicators from '../../common/ProgressIdicators/ProgressIndicators';

type PropsType = {
    lessonId: number
    lesson: string
    percent: number;
}

const ItemLessons: React.FC<PropsType> = ({lessonId, lesson, percent}) => {

    return(
        <div className={style.lessonsItem}>
            <NavLink to={'/translateWords/' + lessonId}>
                <div className={style.textBlock}>
                    <span>
                        {lesson}
                    </span>
                </div>
            </NavLink>
            <div  className={style.progressIndecator} >
                <ProgressIndicators persent={percent} />
            </div>
           
        </div>
    );

}

export default ItemLessons;