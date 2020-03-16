import { WordsControllerState } from "./WordsControllerState";
import { WordsDTO } from "../../Model/WordsDTO";



export class InCorrectWordsState extends WordsControllerState {

    //private currentLesson: number = 0;

    constructor(listWords: Array<WordsDTO>){
        super(listWords);

        this.listLessons = this.getLessons();

        if(this.listLessons.length > 0){
            this.currentListLesson = this.getListLessonsById(this.listLessons[0].LessonsId);
        }

        this.SetSortList(listWords);
        console.log(listWords);
        console.log("----- InCorrectWordsState constructor-----")
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

     private SetSortList(list: Array<WordsDTO>){

        let sortingList = new Array<WordsDTO>();

        for(let i = 0; i < this.listLessons.length; i++){

            let listByLessons = new Array<WordsDTO>(); 
            listByLessons = this.listWords.filter(f => f.LessonsId === this.listLessons[i].LessonsId);

            for(let l = 0; l < listByLessons.length; l++){

                listByLessons[l].LessonsId = (i + 1)
                listByLessons[l].WordsCount = (l + 1)

                sortingList.push(listByLessons[l]);
            }
        }

        if(sortingList.length > 0){
            this.updateListWords(sortingList);
        }
    }
}