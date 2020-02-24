
//let listWords = new Array();

export default class WordsRepositorySingelton {

    static myInstance = null;

    listWords = new Array();

    static getInstance(){
        if(WordsRepositorySingelton.myInstance == null)
        {
            WordsRepositorySingelton.myInstance = new WordsRepositorySingelton();
        }

        return this.myInstance;
    }

    //Public Method
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


// export const WordsRepository = {
//     setList(list){
//         if(!list) return;
//         if(listWords.length === 0) listWords = list;
//     },
//     getList()
//     {
//         return listWords;
//     },
//     getListByLessons(lessons){
//         if(!lessons) return listWords;
//         return getListByLesson(lessons);
//     },
//     isListEmpty()
//     {
//        return listWords.length === 0 ? true : false;
//     },
//     getModelFromLessonByWordsCount( lessons, wordsCount )
//     {
//         return getModelByWordsCount(lessons, wordsCount);
//     },
//     getListLessons()
//     {
//         let listLessons = [];
//         let previusLesson = "";
//         for(let i = 0; i < listWords.length; i++)
//         {
//             if(listWords[i].Lessons !== previusLesson)
//             {
//                 previusLesson = listWords[i].Lessons;
//                 listLessons.push(listWords[i]);
//             }
//         }


//         return listLessons;
//     }
// }

// const getListByLesson = (lessons) => {
//     return listWords.filter(l => l.Lessons === lessons);
// }

// const getModelByWordsCount = ( lessons, wordsCount ) => {
//     if(!lessons || !wordsCount) return null;

//     let list = getListByLesson(lessons);
//     return (list.length - 1) < wordsCount ? null : list[wordsCount]
// }

