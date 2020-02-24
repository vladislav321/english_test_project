

export default class BaseWordsList {

    constructor()
    {
        this.listWords = new Array();
    }

    setList(list){
        if(!list) return;
        if(this.listWords.length === 0){
            this.listWords = list;
        }
    }

    getList() { return this.listWords }

    getListByLessons(lessons){
        if(!lessons) return this.listWords;
        return this.getListByLesson(lessons);
    }

    isListEmpty(){
       return this.listWords.length === 0 ? true : false;
    }

    getModelFromLessonByWordsCount( lessons, wordsCount ){
        return this.getModelByWordsCount(lessons, wordsCount);
    }

    getListLessons()
    {
        let listLessons = [];
        let previusLesson = "";
        for(let i = 0; i < this.listWords.length; i++)
        {
            if(this.listWords[i].Lessons !== previusLesson)
            {
                previusLesson = this.listWords[i].Lessons;
                listLessons.push(this.listWords[i]);
            }
        }
        return listLessons;
    }

    //Public Method

    getModelByWordsCount( lessons, wordsCount ){
        if(!lessons || !wordsCount) return null;
    
        let list = this.getListByLesson(lessons);
        return (list.length - 1) < wordsCount ? null : list[wordsCount]
    }

    getListByLesson(lessons){ return this.listWords.filter(l => l.Lessons === lessons); }



}