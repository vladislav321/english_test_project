import { WordsDTO } from "../../Model/WordsDTO";


class MockInCorrectWords {

    public getListWods(): Array<WordsDTO> {
        let list = new Array<WordsDTO> ();
        
        list.push( this.getModel("1", 2, 1, 3) );
        list.push( this.getModel("1", 3, 1, 3) );
        list.push( this.getModel("1", 4, 1, 3) );

        list.push( this.getModel("2", 3, 2, 3) );
        list.push( this.getModel("2", 4, 2, 3) );

        list.push( this.getModel("3", 1, 3, 1) );
        list.push( this.getModel("3", 2, 3, 2) );
        list.push( this.getModel("3", 3, 3, 3) );
        list.push( this.getModel("3", 4, 3, 4) );



        return list;
    }

    public getModel(lessons: string, wordsCount: number, lessonsId: number, sucssesCount: number): WordsDTO {
        return new WordsDTO().setLesson(lessons).setWordsCount(wordsCount).setLessonId(lessonsId).setSucssesCount(sucssesCount);
    }

}

export {MockInCorrectWords}