import React, {Component} from 'react';
import TranslateWords from './TranslateWords';
import { connect } from 'react-redux';
import {getWordFromLessonByNumber , getNextLesson, getPreviusLesson, getFirstModel} from '../../redux/translate_words_reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import {MapStatePropsType, MapDispatchPropsType, OwnPropsType} from  './../../Types/TranslateWords/translate-words-types';

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class TranslateWordsContainer extends Component<PropsType> {


    componentDidMount()
    {
        console.log("componentDidMount");
        let lessonsParam = this.props.match.params.lesson;
        if(!lessonsParam){
            this.props.getFirstModel(1);
        }else{
            let lessonId = parseInt(lessonsParam);
            this.props.getFirstModel(lessonId);
        }
       
        
    }

    render(){
        return(
            <TranslateWords 
                model={this.props.model}
                getNextLesson={this.props.getNextLesson}
                getPreviusLesson={this.props.getPreviusLesson}
                getWordFromLessonByNumber={this.props.getWordFromLessonByNumber}
                getFirstModel={this.props.getNextLesson}
               />
        );
    }

} 

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    model: state.translateWordsReducer.model,
});

export default compose( connect(mapStateToProps, 
    {getWordFromLessonByNumber, getNextLesson, getPreviusLesson, getFirstModel} ),
withRouter )(TranslateWordsContainer);
