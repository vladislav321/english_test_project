import React, {Component} from 'react';
import ListWords from './ListWords';
import { connect } from 'react-redux';
import {getListWords, chooseTopic} from './../../redux/list-words-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class ListWordsContainer extends Component {


    componentDidMount()
    {
        let lessonsParam = this.props.match.params.lesson;
        if(!lessonsParam){
            this.props.getListWords();
        }else{
            this.props.chooseTopic(lessonsParam);
        }
       
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

export default compose( connect(mapStateToProps, {getListWords, chooseTopic} ),
withRouter )(ListWordsContainer)

//export default connect(mapStateToProps, {getListWords}) (ListWordsContainer);