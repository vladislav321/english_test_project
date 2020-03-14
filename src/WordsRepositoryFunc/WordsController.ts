import WordsRepository from './WordsRepository';
import { WordsDTO } from '../Model/WordsDTO';

class WordsController {

    public getNextLesson(currentLessonId: number): WordsDTO
    {
        if(currentLessonId < this.getListLength())
            return this.getWordsFromLesson(currentLessonId + 1, 0);

        return this.getWordsFromLesson(1, 0);
    }

    public getPreviusLesson(currentLessonId: number): WordsDTO
    {
        if(currentLessonId > 1)  
            return this.getWordsFromLesson(currentLessonId - 1, 0);

        return this.getWordsFromLesson(1, 0);
    }

    public getListLessons(): Array<WordsDTO>
    {
        let listLessons = new Array<WordsDTO>()
        let previusLesson = "";
        let list = this.getAllList();
    
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

    public getWordsFromLesson(lessonId: number, wordsCount: number = 0): WordsDTO
    {
        let list = this.getListLessonsById(lessonId);
        let model = (list.length - 1) < wordsCount ? this.getEmptyModel(lessonId, wordsCount) : list[wordsCount];
        return model;
    }

    private getListLessonsById(lessonId: number): Array<WordsDTO>
    {
        return this.getAllList().filter(l => l.LessonsId === lessonId);
    }

    private getAllList(): Array<WordsDTO>
    {
       return WordsRepository.getInstance().getList();
    }

    private getListLength(): number
    {
        return this.getAllList().length;
    }

    private getEmptyModel(lessonId:number, wordsCount:number): WordsDTO
    {
        return new WordsDTO().setId("1").setWordsCount(wordsCount).setLessonId(lessonId);
    }
}

export {WordsController}


