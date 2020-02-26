import WordsRepositorySingelton from './../WordsRepository/listAllWords';

const GET_WORD_BY_NUMBER = "GET_WORD_BY_NUMBER";


let Init = {
    model: {}
}

const TranslateWordsReducer = (state = Init, action) => {

    switch(action.type)
    {
        case GET_WORD_BY_NUMBER:
            return {...state, model: WordsRepositorySingelton.getInstance().getModelFromLessonByWordsCount( action.lesson, action.number)};

        default :
            return {...state, model: WordsRepositorySingelton.getInstance().getModelFromLessonByWordsCount( "LESSONONE" , 0)}    
    }
}

export const getWordFromLessonByNumber = (lesson, number) => ({type: GET_WORD_BY_NUMBER, lesson, number})

export default TranslateWordsReducer;

