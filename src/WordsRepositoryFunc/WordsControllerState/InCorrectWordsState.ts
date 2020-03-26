import { WordsControllerState } from "./WordsControllerState";
import { WordsDTO } from "../../Model/WordsDTO";



export class InCorrectWordsState extends WordsControllerState {

    //private currentLesson: number = 0;

    constructor(listWords: Array<WordsDTO>){
        super(listWords);

        if(this.listLessons.length > 0){
            this.currentListLesson = this.getListLessonsById(this.listLessons[0].LessonsId);
        }

        this.SetSortList(listWords);
        console.log(listWords);
        
    }

     private SetSortList(list: Array<WordsDTO>){
        for(let i = 0; i < this.listWords.length; i++)
        {
            this.listWords[i].LessonsId = 1;
            this.listWords[i].WordsCount = (i + 1);
        }

        this.updateListWords(this.listWords);
        
    }
}