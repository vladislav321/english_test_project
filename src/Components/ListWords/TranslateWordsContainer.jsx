import React, {Component} from 'react';
import TranslateWords from './TranslateWords';
import { connect } from 'react-redux';
import {getWordFromLessonByNumber , getNextLesson, getPreviusLesson} from '../../redux/translate_words_reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class TranslateWordsContainer extends Component {


    componentDidMount()
    {
        let lessonsParam = this.props.match.params.lesson;
        if(!lessonsParam){
            this.props.getWordFromLessonByNumber(1, 0);
        }else{
            let lessonId = parseInt(lessonsParam);
            this.props.getWordFromLessonByNumber(lessonId, 0);
        }
       
        
    }

    render(){
        return(
            <TranslateWords {...this.props}/>
        );
    }

} 

const mapStateToProps = (state) => ({
    model: state.translateWordsReducer.model,
});

export default compose( connect(mapStateToProps, 
    {getWordFromLessonByNumber, getNextLesson, getPreviusLesson} ),
withRouter )(TranslateWordsContainer);
