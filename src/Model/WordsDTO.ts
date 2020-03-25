
 class WordsDTO {

    public Id: string;
    public Lessons: string;
    public En: string;
    public Ru: string;
    public WordsCount: number;
    public LessonsId: number;
    public SucssesCount: number = 0;

    constructor(
        theId: string = "1",
        lessons: string = "---",
        en: string = "---",
        ru: string = "---",
        wordsCount: number = 0,
        lessonsId: number = 0,
        sucssesCount: number = 0){

        this.Id = theId;
        this.Lessons = lessons;
        this.En = en;
        this.Ru = ru;
        this.WordsCount = wordsCount;
        this.LessonsId = lessonsId;
        this.SucssesCount = sucssesCount;
    }

    public setId(id: string): WordsDTO{
        this.Id = id;
        return this;
    }

    public setLesson(lessons: string): WordsDTO {
        this.Lessons = lessons;
        return this;
    }

    public setEn(en: string): WordsDTO {
        this.En = en;
        return this;
    }

    public setRu(ru: string): WordsDTO {
        this.Ru = ru;
        return this;
    }

    public setWordsCount(wordsCount: number) : WordsDTO {
        this.WordsCount = wordsCount;
        return this;
    }

    public setLessonId(lessonId: number) : WordsDTO {
        this.LessonsId = lessonId;
        return this;
    }

    public setSucssesCount(sucssesCount: number): WordsDTO {
        this.SucssesCount = sucssesCount;
        return this;
    }

}

export { WordsDTO };