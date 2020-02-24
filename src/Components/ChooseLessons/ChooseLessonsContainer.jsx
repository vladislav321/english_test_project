import React, {Component} from 'react';
import ChooseLessons from './ChooseLessons';
import { connect } from 'react-redux';
import {} from './../../redux/list-words-reducer';


class ChooseLessonsContainer extends Component {

    render()
    {
        return <ChooseLessons {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    words: state.listWordsReducer.words,
})

export default connect(mapStateToProps, {})(ChooseLessonsContainer)
