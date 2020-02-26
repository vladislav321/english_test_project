import WordsRepositorySingelton from './../WordsRepository/listAllWords';

const GET_LIST_LESSONS = "GET_LIST_LESSONS";

let Init = {
    sortListLessons: []
}

const LesssonsReducer = (state, action) => {

    switch(action.type)
    {
        case GET_LIST_LESSONS:
            return {...state, sortListLessons: WordsRepositorySingelton.getInstance().getListLessons() }

        default :
            return {...state, sortListLessons: WordsRepositorySingelton.getInstance().getListLessons() }  
    }

}

export const getListLessons = () => ({type: GET_LIST_LESSONS});

export default LesssonsReducer;