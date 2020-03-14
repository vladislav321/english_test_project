import React from 'react';
import style from './ChooseLessons.module.css';
import { NavLink } from 'react-router-dom';
import ProgressIndicators from '../../common/ProgressIdicators/ProgressIndicators';

type PropsType = {
    lessonId: number
    lesson: string
}

const ItemLessons: React.FC<PropsType> = ({lessonId, lesson}) => {

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
                <ProgressIndicators persent={20} />
            </div>
           
        </div>
    );

}

export default ItemLessons;