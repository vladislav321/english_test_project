

export default class WordsList {

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


    getModelNextLessons(currentLesson)
    {
        let listLesson = this.getListLessons();
        for(let i = 0; i < listLesson.length; i++)
        {
            if(listLesson[i].Lessons === currentLesson)
            {
                if(i < (listLesson.length - 1)) 
                {
                    return listLesson[i + 1];
                }
            }
        }

        return listLesson[0];
    }

    getModelPreviusLessons(currentLesson)
    {
        let listLesson = this.getListLessons();
        for(let i = 0; i < listLesson.length; i++)
        {
            if(listLesson[i].Lessons === currentLesson)
            {
                if(i > 0) 
                {
                    return listLesson[i - 1];
                }
            }
        }

        return listLesson[0];
    }

    //Public Method

    getModelByWordsCount( lessons, wordsCount = 0 ){
        if(!lessons) {
            return null;
        } 
    
        let list = this.getListByLesson(lessons);
        
        let modelNull = {Id: "1", Lessons: lessons, En: "---", Ru: "---", WordsCount: wordsCount};

        let model = (list.length - 1) < wordsCount ? modelNull : list[wordsCount];



        return model;
    }

    getListByLesson(lessons){ return this.listWords.filter(l => l.Lessons === lessons); }

    ClearRepo() {
        this.listWords = [];
    }



}