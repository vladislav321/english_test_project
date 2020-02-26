import React from 'react';
import Header from './HeaderFunc/Header';
import { connect } from 'react-redux';
import {getListWords} from './../../redux/list-words-reducer';

class HeaderContainer extends React.Component {

    componentDidMount()
    {
        this.props.getListWords();
    }

    render()
    {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state) => ({
    listWordsReducer: state.listWordsReducer.words,
})

export default connect( mapStateToProps, {getListWords})(HeaderContainer);

