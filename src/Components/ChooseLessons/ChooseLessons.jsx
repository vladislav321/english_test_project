import React from 'react';
import ItemLessons from './ItemLessons';

const ChooseLessons = (props) => {
      
        let listLessons = props.sortListLessons.map( p => 
            <ItemLessons lesson={p.Lessons} />);

        return(
            <div>
               { listLessons}
            </div>
        );

}

export default ChooseLessons;