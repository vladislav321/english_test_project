
let listWords = new Array();

export const SetListWords = (list) => {
    if(!list) return;
    
    if(listWords.length === 0)
    {
        listWords = list;
    }
}

export const GetListWords = () => {
    return listWords;
}

export const GetListWordsByLessons = (lessons) => {
    if(!lessons) return listWords;

    let list = listWords.filter(l => l.lessons === lessons);
    return list;
}
