import WordsRepository from './WordsRepository';

const instance = WordsRepository.getInstance();

export const WordsController = {

    getLesson(lessonId){
        return getLessonWords(lessonId);
    },

    getNextLesson(currentLessonId){
        if(currentLessonId < getListLength())
            return this.getWordsFromLesson(currentLessonId + 1, 0);
    },

    getPreviusLesson(currentLessonId){
        if(currentLessonId >= getListLength())  
            return this.getWordsFromLesson(currentLessonId - 1, 0);;
    },

    getWordsFromLesson(lessonId, wordsCount = 0){
        let list = getLessonWords(lessonId);
        let model = (list.length - 1) < wordsCount ? getEmptyModel(lessonId, wordsCount) : list[wordsCount];
        return model;
    },

    getListLessons(){
        return getListLessons();
    }

}

const getAllList = () => instance.getList();
const getLessonWords = (lessonId) => getAllList().filter(l => l.LessonsId === lessonId);
const getListLength = () => getAllList().length;

const getEmptyModel = (lessonId, wordsCount) => {
    let modelNull = {Id: "1", Lessons: "---", En: "---", Ru: "---", WordsCount: wordsCount, LessonsId: lessonId};
    return modelNull;
}

const getListLessons = () => {
    let listLessons = [];
    let previusLesson = "";
    let list = getAllList();

    for(let i = 0; i < list.length; i++)
    {
        if(list[i].Lessons !== previusLesson)
        {
            previusLesson = list[i].Lessons;
            listLessons.push(list[i]);
        }
    }
    return listLessons;
}
