import React from 'react';
import style from './ChooseLessons.module.css';
import { NavLink } from 'react-router-dom';

const ItemLessons = (props) => {

    return(
        <div className={style.lessonsItem}>
            <NavLink to={'/listWords/' + props.lesson}>
                <span>
                    {props.lesson}
                </span>
            </NavLink>
        </div>
    );

}

export default ItemLessons;