import { WordsDTO } from "../../Model/WordsDTO";

export abstract class WordsControllerState {

    public listWords: Array<WordsDTO> = new Array<WordsDTO>();
    public currentListLesson: Array<WordsDTO> = new Array<WordsDTO>();
    public listLessons: Array<WordsDTO> = new Array<WordsDTO>();

    constructor(listWords:Array<WordsDTO>){
        this.listWords = listWords;
    }

    abstract getNextLesson(currentLessonId: number): WordsDTO 
    abstract getPreviusLesson(currentLessonId: number): WordsDTO 
    abstract getLessonModel(lessonId: number, wordsCount: number): WordsDTO 
    abstract getWordsFromLesson(lessonId: number, wordsCount: number): WordsDTO 

    public getEmptyModel(lessonId:number, wordsCount:number): WordsDTO {
        return new WordsDTO().setId("1").setWordsCount(wordsCount).setLessonId(lessonId);
    }

    public getListLessons(): Array<WordsDTO> {
        return this.listLessons;
    }

    public updateListWords(list: Array<WordsDTO>): void {
        this.listWords  = list;
        this.listLessons = this.getLessons();
    }

    public getListLessonsById(lessonId: number): Array<WordsDTO> {
        let list = this.listWords.filter(l => l.LessonsId === lessonId);
        return list;
    }

    protected getLessons(): Array<WordsDTO> {
        let listLessons = new Array<WordsDTO>()
        let previusLesson = "";
        let list = this.listWords;
    
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

}