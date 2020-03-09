import React from 'react';
import style from './ProgressIndicators.module.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const ProgressIndicators = ({persent}) => {

    let persents = !persent ? 22 : persent;
    let status = "";
   
    if(persents === 100)
    {
        status="success"   
    }
      
    console.log("Status :" + status);

    return(
        <div className={style.blockProggres}>
            <Progress 
             strokeWidth={7}
             width={50} 
             status={status}
             percent={persents} />
        </div>
      
    )
}

export default ProgressIndicators;