import React from 'react';
import style from './ProgressIndicators.module.css';

const ProgressIndicators = ({persent}) => {

    let persents = !persent ? "60%" : persent;

    return(
        <div className={style.blockProggres}>
            <div className={style.parrentProgressIndicator}>
                <div className={ style.progressIndicatorStyle } />
            </div>
           
            <div>
                <span>
                    {persent}
                </span>
            </div>
        </div>
      
    )
}

export default ProgressIndicators;