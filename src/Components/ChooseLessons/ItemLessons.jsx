import React from 'react';
import style from './ChooseLessons.module.css';

const ItemLessons = (props) => {

    const OnChoseLesson = () => {

    }

    return(
        <div className={style.lessonsItem} onClick={OnChoseLesson}>
            <span>
                 {props.lesson}
            </span>
        </div>
    );

}

export default ItemLessons;