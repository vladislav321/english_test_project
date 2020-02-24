import React from 'react';
import s from  './Header.module.css';

const Header = (props) => {
    return(
    <header className={s.header}>
        <img 
        alt="Logo" 
        src='https://cdn.mos.cms.futurecdn.net/MFHVMYQCeJHMGop4u8VkzJ.jpg'/>

        {/* <div className={s.loginBlock}>
            {props.isAuth ? 
              props.login 
            : <NavLink to={'/login'}>Login</NavLink> }
        </div> */}
     </header>
    );
}

export default Header;