import { WordsDTO } from "../Model/WordsDTO";
import { LessonPersent } from "../Model/LessonPersent";


class LessonsSorter {

    private list: Array<WordsDTO>;

    constructor(list: Array<WordsDTO>){
        this.list = list;
    }

    public getLessons(): Array<WordsDTO> {
        let listLessons = new Array<WordsDTO>()
        let previusLesson = "";
    
        for(let i = 0; i < this.list.length; i++)
        {
            if(this.list[i].Lessons !== previusLesson)
            {
                previusLesson = this.list[i].Lessons;
                listLessons.push(this.list[i]);
            }
        }
        return listLessons;
    }


    public getListLessonsWithPercet(listInCorrect: Array<WordsDTO>): Array<LessonPersent> {

        let listLessons = this.getLessons();
        let listPercet = new Array<LessonPersent>();

        for(let i = 0; i < listLessons.length;i++) {
            let listLessonById = this.list.filter(f => f.LessonsId === listLessons[i].LessonsId);
            let listInCorrectById = listInCorrect.filter(f => f.LessonsId === listLessons[i].LessonsId);
            if(listInCorrectById && listInCorrectById.length > 0)
            {
                listPercet.push(new LessonPersent(listLessons[i].Lessons, listLessons[i].LessonsId, this.getPersent(listLessonById.length, listInCorrectById.length) ));
            }
            else
            {
                listPercet.push(new LessonPersent(listLessons[i].Lessons, listLessons[i].LessonsId, 100));
            }
            

        }

        return listPercet;
    }

    public getPersent(lessonListSize: number, inCorrectListSize: number ): number {
        let result = (inCorrectListSize * 100) / lessonListSize;
        return Math.round( result );
    }

}

export {LessonsSorter}