import { WordsControllerState } from "./WordsControllerState";
import { WordsDTO } from "../../Model/WordsDTO";


export class CorrectWordsState extends WordsControllerState {

    constructor(listWords: Array<WordsDTO>){
        super(listWords);

        this.currentListLesson = this.getListLessonsById(1);

        console.log("----- CorrectWordsState constructor-----")
    }

}