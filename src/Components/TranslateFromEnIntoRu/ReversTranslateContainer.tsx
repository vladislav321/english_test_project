import React, {Component} from 'react';

import { connect } from 'react-redux';
import {getWordFromLessonByNumber , getNextLesson, getPreviusLesson, 
    getFirstModel, setWrongWords, saveWrongWods, updateCurrectList, 
    getNextWord, getPreviusWord} from '../../redux/translate_words_reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import {MapStatePropsType, MapDispatchPropsType, OwnPropsType, OwnDispatchPropsType} from  './../../Types/TranslateWords/translate-words-types';
import { TypeCurrectList } from '../../Enum/TypeCurrectList';
import ReversTranslate from './ReversTranslate';

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & OwnDispatchPropsType;

class ReversTranslateContainer extends Component<PropsType> {


   componentDidMount(){

    this.props.updateCurrectList(TypeCurrectList.Currect);
    this.props.getFirstModel(1);
   }

    render()
    {
        return <ReversTranslate 
                model={this.props.model}
                getNextLesson={this.props.getNextLesson}
                getPreviusLesson={this.props.getPreviusLesson}
                getWordFromLessonByNumber={this.props.getWordFromLessonByNumber}
                setWrongWords={this.props.setWrongWords}
                getNextWord={this.props.getNextWord}
                getPreviusWord={this.props.getPreviusWord}
                    />
    }

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    model: state.translateWordsReducer.model,
});

export default compose( connect(mapStateToProps, 
    {getWordFromLessonByNumber, getNextLesson, getPreviusLesson, getFirstModel, 
        setWrongWords, saveWrongWods, updateCurrectList, getNextWord, getPreviusWord} ),
withRouter )(ReversTranslateContainer);
