import { WordsDTO } from "../../Model/WordsDTO";

export class WordsControllerState {

    public listWords: Array<WordsDTO> = new Array<WordsDTO>();
    public currentListLesson: Array<WordsDTO> = new Array<WordsDTO>();
    public listLessons: Array<WordsDTO> = new Array<WordsDTO>();

    constructor(listWords:Array<WordsDTO>){
        this.listWords = listWords;

        this.listLessons = this.getLessons();
    }

    public getNextLesson(currentLessonId: number): WordsDTO {
        if(currentLessonId < this.listWords.length)
             return this.getLessonModel(currentLessonId + 1, 0);
   
        return this.getLessonModel(1, 0);
     }

     public getPreviusLesson(currentLessonId: number): WordsDTO {
        if(currentLessonId > 1) 
            return this.getLessonModel(currentLessonId - 1, 0);

        return this.getLessonModel(1, 0);
     }

     public getLessonModel(lessonId: number, wordsCount: number): WordsDTO {
        this.currentListLesson = this.getListLessonsById(lessonId);
        return this.getWordsFromLesson(lessonId, wordsCount);
     }

    public getWordsFromLesson(lessonId: number, wordsCount: number): WordsDTO {
        let list = this.currentListLesson;
        let model = (list.length - 1) < wordsCount ? this.getEmptyModel(lessonId, wordsCount) : list[wordsCount];
        return model;
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

    public getEmptyModel(lessonId:number, wordsCount:number): WordsDTO {
        return new WordsDTO().setId("1").setWordsCount(wordsCount).setLessonId(lessonId);
    }

}