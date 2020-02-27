import WordsRepositorySingelton from '../WordsRepository/WordsRepositorySingelton';

const GET_WORD_BY_NUMBER = "GET_WORD_BY_NUMBER";
const NEXT_LESSON = "NEXT_LESSON";
const PREVIUS_LESSON = "PREVIUS_LESSON";


let Init = {
    model: {Id: "1", Lessons: "1", En: "---", Ru: "---", WordsCount: 0}
}

const TranslateWordsReducer = (state = Init, action) => {

    switch(action.type)
    {
        case GET_WORD_BY_NUMBER:
            return {...state, model: GetModel(action.lesson, action.number) };

        case NEXT_LESSON:
            return {...state, model: GetNextLesson(action.currentLesson)};
        
        case PREVIUS_LESSON:
            return {...state, model: GetPreviusLesson(action.currentLesson)};

        default :
            return {...state, model: GetModel( "1" , 0) }    
    }
}

export const GetModel = (lessons, number) => {
    return WordsRepositorySingelton.getInstance().getModelFromLessonByWordsCount( lessons, number);
}

const GetNextLesson = (currentLesson) => {
    return WordsRepositorySingelton.getInstance().getModelNextLessons(currentLesson);
}

const GetPreviusLesson = (currentLesson) => {
    return WordsRepositorySingelton.getInstance().getModelPreviusLessons(currentLesson);
}

export const getWordFromLessonByNumber = (lesson, number) => ({type: GET_WORD_BY_NUMBER, lesson, number})
export const getNextLesson = (currentLesson) => ({type: NEXT_LESSON, currentLesson});
export const getPreviusLesson = (currentLesson) => ({type: PREVIUS_LESSON, currentLesson});


export default TranslateWordsReducer;

