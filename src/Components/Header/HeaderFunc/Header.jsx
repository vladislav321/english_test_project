import React from 'react';
import s from  './Header.module.css'

const Header = (props) => {

    const onClearRepo = () => {
        props.clearRepo();
    }

    return(
    <header className={s.header}>

        <div className={s.panel}>
            <button onClick={onClearRepo}>
                clear all list
            </button>
        </div>
       

     </header>
    );
}

export default Header;