import React, {Component} from 'react';
import ListWords from './ListWords';
import { connect } from 'react-redux';
import {getWordFromLessonByNumber} from './../../redux/translate_words_reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class ListWordsContainer extends Component {


    componentDidMount()
    {
        let lessonsParam = this.props.match.params.lesson;
        if(!lessonsParam){
            this.props.getWordFromLessonByNumber("LESSONONE", 0);
        }else{
            this.props.getWordFromLessonByNumber(lessonsParam, 0);
        }
       
        
    }

    render(){
        return(
            <ListWords {...this.props}/>
        );
    }

} 

const mapStateToProps = (state) => ({
    model: state.translateWordsReducer.model,
});

export default compose( connect(mapStateToProps, {getWordFromLessonByNumber} ),
withRouter )(ListWordsContainer);
