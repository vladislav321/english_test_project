import React, {Component} from 'react';
import ListWords from './ListWords';
import { connect } from 'react-redux';

class ListWordsContainer extends Component {

    render(){
        return(
            <ListWords {...this.props}/>
        );
    }

} 

const mapStateToProps = (state) => ({
    words: state.listWordsReducer.words,
});

export default connect(mapStateToProps, {}) (ListWordsContainer);