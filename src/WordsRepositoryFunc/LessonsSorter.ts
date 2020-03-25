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

            let model = listLessons[i];

            if(listInCorrectById && listInCorrectById.length > 0)
            {
                let persent = this.getPersent(listLessonById.length, listInCorrectById.length);
                listPercet.push(new LessonPersent(model.Id, model.Lessons, model.LessonsId, persent));
            }
            else
            {
                listPercet.push(new LessonPersent(model.Id, model.Lessons, model.LessonsId, 100));
            }
            

        }

        return listPercet;
    }

    public getPersent(lessonListSize: number, inCorrectListSize: number ): number {
        let resultPercent = (inCorrectListSize * 100) / lessonListSize;

        if(resultPercent > 100)
            resultPercent = 100;

        let result = 100 - resultPercent;

        return Math.round( result );
    }

}

export {LessonsSorter}