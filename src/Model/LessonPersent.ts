

class LessonPersent {

    public Id: string;
    public Lesson: string;
    public LessonId: number;
    public Persent: number;

    constructor(theId: string = "1", lesson: string = "1", lessonId: number = 0, persent: number = 0){
        this.Id = theId;
        this.Lesson = lesson;
        this.LessonId = lessonId;
        this.Persent = persent;
    }

    public setLessons(lessons: string) : LessonPersent {
        this.Lesson = lessons;
        return this;
    }

    public setLessonsId(lessonsId: number) : LessonPersent {
        this.LessonId = lessonsId;
        return this;
    }

    public setPersent(persent: number) : LessonPersent {
        this.Persent = persent;
        return this;
    }

}

export {LessonPersent}