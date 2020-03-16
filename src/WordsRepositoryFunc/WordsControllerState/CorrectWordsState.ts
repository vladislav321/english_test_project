import { WordsControllerState } from "./WordsControllerState";
import { WordsDTO } from "../../Model/WordsDTO";


export class CorrectWordsState extends WordsControllerState {

    constructor(listWords: Array<WordsDTO>){
        super(listWords);

        this.currentListLesson = this.getListLessonsById(1);

        this.listLessons = this.getLessons();

        console.log("----- CorrectWordsState constructor-----")
    }

     getNextLesson(currentLessonId: number): WordsDTO {
        if(currentLessonId < this.listWords.length)
             return this.getLessonModel(currentLessonId + 1, 0);
   
        return this.getLessonModel(1, 0);
     }

     getPreviusLesson(currentLessonId: number): WordsDTO {
        if(currentLessonId > 1) 
            return this.getLessonModel(currentLessonId - 1, 0);

        return this.getLessonModel(1, 0);
     }

     getLessonModel(lessonId: number, wordsCount: number): WordsDTO {
        this.currentListLesson = this.getListLessonsById(lessonId);
        return this.getWordsFromLesson(lessonId, wordsCount);
     }

     getWordsFromLesson(lessonId: number, wordsCount: number): WordsDTO {
        let list = this.currentListLesson;
        let model = (list.length - 1) < wordsCount ? this.getEmptyModel(lessonId, wordsCount) : list[wordsCount];
        return model;
     }

}