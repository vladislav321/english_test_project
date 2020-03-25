

class LessonPersent {

    public Id: string;
    public Lesson: string;
    public LessonId: number;
    public Percent: number;

    constructor(theId: string = "1", lesson: string = "1", lessonId: number = 0, percent: number = 0){
        this.Id = theId;
        this.Lesson = lesson;
        this.LessonId = lessonId;
        this.Percent = percent;
    }

    public setLessons(lessons: string) : LessonPersent {
        this.Lesson = lessons;
        return this;
    }

    public setLessonsId(lessonsId: number) : LessonPersent {
        this.LessonId = lessonsId;
        return this;
    }

    public setPercent(percent: number) : LessonPersent {
        this.Percent = percent;
        return this;
    }

}

export {LessonPersent}