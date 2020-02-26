import WordsRepositorySingelton from '../WordsRepository/WordsRepositorySingelton';

const GET_WORD_BY_NUMBER = "GET_WORD_BY_NUMBER";


let Init = {
    model: {}
}

const TranslateWordsReducer = (state = Init, action) => {

    switch(action.type)
    {
        case GET_WORD_BY_NUMBER:
            return {...state, model: GetModel(action.lesson, action.number) };

        default :
            return {...state, model: GetModel( "LESSONONE" , 0) }    
    }
}

export const GetModel = (lessons, number) => {
    let model = WordsRepositorySingelton.getInstance().getModelFromLessonByWordsCount( lessons, number);

    return model;
}

export const getWordFromLessonByNumber = (lesson, number) => ({type: GET_WORD_BY_NUMBER, lesson, number})

export default TranslateWordsReducer;

