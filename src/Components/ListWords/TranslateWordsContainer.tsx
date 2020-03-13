import React, {Component} from 'react';
import TranslateWords from './TranslateWords';
import { connect } from 'react-redux';
import {getWordFromLessonByNumber , getNextLesson, getPreviusLesson} from '../../redux/translate_words_reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { WordsDTO } from '../../Model/WordsDTO';
import { AppStateType } from '../../redux/redux-store';




type MapStatePropsType = {
    model: WordsDTO
}

type MapDispatchPropsType = {
    getWordFromLessonByNumber: (lessonId: number, wordsCount: number) => void
    getNextLesson: (lessonId: number) => void
    getPreviusLesson: (lessonId: number) => void
}

type OwnPropsType = {
    match: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class TranslateWordsContainer extends Component<PropsType> {


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
            <TranslateWords 
                model={this.props.model}
                getNextLesson={this.props.getNextLesson}
                getPreviusLesson={this.props.getPreviusLesson}
                getWordFromLessonByNumber={this.props.getWordFromLessonByNumber}/>
        );
    }

} 

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    model: state.translateWordsReducer.model,
});

export default compose( connect(mapStateToProps, 
    {getWordFromLessonByNumber, getNextLesson, getPreviusLesson} ),
withRouter )(TranslateWordsContainer);
