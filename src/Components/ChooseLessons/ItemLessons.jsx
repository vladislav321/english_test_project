import React from 'react';
import style from './ChooseLessons.module.css';

const ItemLessons = (props) => {
    return(
        <div className={style.lessonsItem}>
            <span>
                 {props.lesson}
            </span>
        </div>
    );

}

export default ItemLessons;