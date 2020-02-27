
import WordsLocalStorage from './WordsLocalStorage';

export default class WordsRepositorySingelton {

    static myInstance = null;

    listWords = new Array();

    wordsListLocalApi = new WordsLocalStorage();

    static getInstance(){
        if(WordsRepositorySingelton.myInstance == null)
        {
            WordsRepositorySingelton.myInstance = new WordsRepositorySingelton();
        }

        return this.myInstance;
    }

    //Public Method
    setList(list) { this.wordsListLocalApi.setList(list); }

    getList() { return this.wordsListLocalApi.getList() }

    getListByLessons(lessons){ return this.wordsListLocalApi.getListByLesson(lessons); }

    isListEmpty(){ return this.wordsListLocalApi.isListEmpty(); }

    getModelFromLessonByWordsCount( lessons, wordsCount ) {
        return this.wordsListLocalApi.getModelFromLessonByWordsCount(lessons, wordsCount);
    }

    getListLessons() { return this.wordsListLocalApi.getListLessons(); }

    getModelNextLessons(currentLesson){
      return this.wordsListLocalApi.getModelNextLessons(currentLesson);
    }

    getModelPreviusLessons(currentLesson){
       return this.wordsListLocalApi.getModelPreviusLessons(currentLesson);
    }

    ClearRepo() { this.wordsListLocalApi.ClearRepo(); }

    //Public Method
  
}


