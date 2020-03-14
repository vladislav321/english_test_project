import { WordsDTO } from '../Model/WordsDTO';

class WordsController {

    private listWords: Array<WordsDTO> = new Array<WordsDTO>();
    private currentListLesson: Array<WordsDTO> = new Array<WordsDTO>();

    constructor(listWords: Array<WordsDTO> )
    {
        this.listWords = listWords;

        this.currentListLesson = this.getListLessonsById(1);

        console.log("-----WordsController Init contructor ----");
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

    public getListLessons(): Array<WordsDTO> {
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

    public getWordsFromLesson(lessonId: number, wordsCount: number = 0): WordsDTO {
        let list = this.currentListLesson;
        let model = (list.length - 1) < wordsCount ? this.getEmptyModel(lessonId, wordsCount) : list[wordsCount];
        return model;
    }

    public setCurrentWordsModel(model: WordsDTO) : void {}

    public getLessonModel(lessonId: number, wordsCount: number): WordsDTO {
        this.currentListLesson = this.getListLessonsById(lessonId);
        return this.getWordsFromLesson(lessonId, wordsCount);
    }

    private getListLessonsById(lessonId: number): Array<WordsDTO> {
        return this.listWords.filter(l => l.LessonsId === lessonId);
    }

    private getEmptyModel(lessonId:number, wordsCount:number): WordsDTO {
        return new WordsDTO().setId("1").setWordsCount(wordsCount).setLessonId(lessonId);
    }
}

export {WordsController}


