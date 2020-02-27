import React from 'react';
import style from './ChooseLessons.module.css';
import { NavLink } from 'react-router-dom';

const ItemLessons = (props) => {

    return(
        <div className={style.lessonsItem}>
            <NavLink to={'/listWords/' + props.lesson}>
                <div className={style.textBlock}>
                    <span>
                        {props.lesson}
                    </span>
                </div>
            </NavLink>
        </div>
    );

}

export default ItemLessons;