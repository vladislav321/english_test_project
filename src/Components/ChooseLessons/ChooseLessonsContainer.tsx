import React, {Component} from 'react';
import ChooseLessons from './ChooseLessonsFunc/ChooseLessons';
import { connect } from 'react-redux';
import {getListLessons} from '../../redux/lessons_reducer';
import { AppStateType } from '../../redux/redux-store';
import { MapStatePropsType } from './../../Types/ListLessons/lessons-types';

type PropsType = MapStatePropsType ;

class ChooseLessonsContainer extends Component<PropsType> {

    render()
    {
        return <ChooseLessons 
                    sortListLessons={this.props.sortListLessons}/>
    }

}

const mapStateToProps = (state: AppStateType) : MapStatePropsType => ({
    sortListLessons: state.lessonsReducer.sortListLessons,
})

export default connect( mapStateToProps, {getListLessons} )(ChooseLessonsContainer)
