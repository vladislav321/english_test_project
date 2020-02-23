import { UserAPI } from "../api/api";

const CHOOSE_TOPIC = "CHOOSE_TOPIC";
const SET_LIST_WORDS = "SET_LIST_WORDS";

let initState = {
    words: [],
};

const ListWordsReducer = (state = initState, action) => {

    switch(action.type)
    {
        case SetListWords:
    }

    return state;
}


const SetListWords = (list) => ({type: SET_LIST_WORDS, list})

export const getListWords = () => (dispatch) => {
    // UserAPI.getWordsList().then(response => {
    //     let qwe = response;
    //     debugger;
    //     dispatch( SetListWords(response.data) );
    // });
}

export default ListWordsReducer;