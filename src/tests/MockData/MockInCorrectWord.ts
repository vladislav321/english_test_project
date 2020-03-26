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

    public getListWrongOrder(): Array<WordsDTO> {
        let list = new Array<WordsDTO>();

        list.push( this.getModel("5", 4, 5, 0) );
        list.push( this.getModel("9", 1, 9, 0) );
        list.push( this.getModel("11", 2, 11, 0) );
        list.push( this.getModel("13", 4, 13, 0) );
        list.push( this.getModel("7", 4, 10, 0) );

        list.push( this.getModel("2", 4, 2, 0) );
        list.push( this.getModel("3", 1, 3, 0) );
        list.push( this.getModel("22", 2, 22, 0) );
        list.push( this.getModel("33", 4, 33, 0) );
        list.push( this.getModel("10", 4, 10, 0) );

        return list;

    }


    public getModel(lessons: string, wordsCount: number, lessonsId: number, sucssesCount: number): WordsDTO {
        return new WordsDTO().setLesson(lessons).setWordsCount(wordsCount).setLessonId(lessonsId).setSucssesCount(sucssesCount);
    }

}

export {MockInCorrectWords}