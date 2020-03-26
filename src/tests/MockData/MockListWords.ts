import { WordsDTO } from "../../Model/WordsDTO";


class MockListWords {

    public getListWods(): Array<WordsDTO>
    {
        let list = new Array<WordsDTO>();

        list.push( this.getModel("1", 1, 1) );
        list.push( this.getModel("1", 2, 1) );
        list.push( this.getModel("1", 3, 1) );
        list.push( this.getModel("1", 4, 1) );
        list.push( this.getModel("1", 5, 1) );

        list.push( this.getModel("1", 6, 1) );
        list.push( this.getModel("1", 7, 1) );
        list.push( this.getModel("1", 8, 1) );
        list.push( this.getModel("1", 9, 1) );
        list.push( this.getModel("1", 10, 1) );

        //----------------------------------------

        list.push( this.getModel("2", 1, 2) );
        list.push( this.getModel("2", 2, 2) );
        list.push( this.getModel("2", 3, 2) );
        list.push( this.getModel("2", 4, 2) );
        list.push( this.getModel("2", 5, 2) );

        list.push( this.getModel("2", 6, 2) );
        list.push( this.getModel("2", 7, 2) );
        list.push( this.getModel("2", 8, 2) );
        list.push( this.getModel("2", 9, 2) );
        list.push( this.getModel("2", 10, 2) );


        //----------------------------------------

        list.push( this.getModel("3", 1, 3) );
        list.push( this.getModel("3", 2, 3) );
        list.push( this.getModel("3", 3, 3) );
        list.push( this.getModel("3", 4, 3) );
        list.push( this.getModel("3", 5, 3) );

        list.push( this.getModel("3", 6, 3) );
        list.push( this.getModel("3", 7, 3) );
        list.push( this.getModel("3", 8, 3) );
        list.push( this.getModel("3", 9, 3) );
        list.push( this.getModel("3", 10, 3) );


        //----------------------------------------

        list.push( this.getModel("4", 1, 4) );
        list.push( this.getModel("4", 2, 4) );
        list.push( this.getModel("4", 3, 4) );
        list.push( this.getModel("4", 4, 4) );
        list.push( this.getModel("4", 5, 4) );

        list.push( this.getModel("4", 6, 4) );
        list.push( this.getModel("4", 7, 4) );
        list.push( this.getModel("4", 8, 4) );
        list.push( this.getModel("4", 9, 4) );
        list.push( this.getModel("4", 10, 4) );


        return list;
    }

    public getCorrectSortList():Array<WordsDTO>{
        let list = new Array<WordsDTO>();

        list.push( this.getModel("5", 1, 1));
        list.push( this.getModel("9", 2, 1));
        list.push( this.getModel("11", 3, 1));
        list.push( this.getModel("13", 4, 1));
        list.push( this.getModel("7", 5, 1));

        list.push( this.getModel("2", 6, 1));
        list.push( this.getModel("3", 7, 1));
        list.push( this.getModel("22", 8, 1));
        list.push( this.getModel("33", 9, 1));
        list.push( this.getModel("10", 10,  1));

        return list;
    }

    public getModel(lessons: string, wordsCount: number, lessonsId: number): WordsDTO {
        return new WordsDTO().setLesson(lessons).setWordsCount(wordsCount).setLessonId(lessonsId);
    }

}

export {MockListWords}