import React, {Component} from 'react';
import ListWords from './ListWords';
import { connect } from 'react-redux';
import {getListWords} from './../../redux/list-words-reducer';

class ListWordsContainer extends Component {


    componentDidMount()
    {
        this.props.getListWords();
    }

    render(){
        return(
            <ListWords {...this.props}/>
        );
    }

} 

const mapStateToProps = (state) => ({
    words: state.listWordsReducer.words,
});

export default connect(mapStateToProps, {getListWords}) (ListWordsContainer);