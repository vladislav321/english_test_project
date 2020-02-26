import React, {Component} from 'react';
import ChooseLessons from './ChooseLessons';
import { connect } from 'react-redux';
import {getListLessons} from './../../redux/lessons_reducer';

class ChooseLessonsContainer extends Component {

    render()
    {
        return <ChooseLessons {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    sortListLessons: state.lessonsReducer.sortListLessons,
})

export default connect( mapStateToProps, {getListLessons} )(ChooseLessonsContainer)
