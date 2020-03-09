const KEY_LOCAL_STORAGE = "keyLocalStorageListWords";

export default class WordsRepository  {
    
    static myInstance = null;

    listWords = new Array();

    static getInstance(){
        if(WordsRepository.myInstance == null)
        {
            WordsRepository.myInstance = new WordsRepository();
        }

        return this.myInstance;
    }

    setList(list){
        this.listWords = list;
        localStorage.setItem( KEY_LOCAL_STORAGE, JSON.stringify(list) );
    }

    getList(){
        if(this.listWords.length === 0)
        {
           return this.getListFromLocalStorage();
        }
        else
        {
            return this.listWords;
        }
    }

    getListFromLocalStorage(){
        let str = localStorage.getItem(KEY_LOCAL_STORAGE);
        if(str !== null){
            return this.listWords = JSON.parse(str);
        }else{
            let mockList = [{Id: "1", Lessons: "---", En: "---", Ru: "---", WordsCount: 0, LessonsId: 0}]
            return mockList;
        }
    }

    isNullOrEmptyListWords(){
        return this.listWords.length === 0 ? true : false;
    }

    clearRepo(){
        localStorage.removeItem(KEY_LOCAL_STORAGE);
        this.listWords = [];
    }

}
