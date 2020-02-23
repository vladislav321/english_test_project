
let listWords = new Array();

export const WordsRepository = {
    setList(list){
        if(!list) return;
        if(listWords.length === 0) listWords = list;
    },
    getList()
    {
        return listWords;
    },
    getListByLessons(lessons){
        if(!lessons) return listWords;

        let list = listWords.filter(l => l.lessons === lessons);
        return list;
    },
    isListEmpty()
    {
       return listWords === 0 ? true : false;
    }
}

