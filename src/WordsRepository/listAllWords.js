
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
        return getListByLesson(lessons);
    },
    isListEmpty()
    {
       return listWords.length === 0 ? true : false;
    },
    getModelFromLessonByWordsCount( lessons, wordsCount )
    {
        return getModelByWordsCount(lessons, wordsCount);
    },
    getListLessons()
    {
        let listLessons = [];
        let previusLesson = "";
        for(let i = 0; i < listWords.length; i++)
        {
            if(listWords[i].Lessons !== previusLesson)
            {
                previusLesson = listWords[i].Lessons;
                listLessons.push(listWords[i]);
            }
        }


        return listLessons;
    }
}

const getListByLesson = (lessons) => {
    return listWords.filter(l => l.Lessons === lessons);
}

const getModelByWordsCount = ( lessons, wordsCount ) => {
    if(!lessons || !wordsCount) return null;

    let list = getListByLesson(lessons);
    return (list.length - 1) < wordsCount ? null : list[wordsCount]
}

