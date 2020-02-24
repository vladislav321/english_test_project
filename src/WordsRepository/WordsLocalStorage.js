import BaseWordsList from './BaseWordsList';

const KEY_LOCAL_STORAGE = "keyLocalStorageListWords";

export default class WordsLocalStorage extends BaseWordsList {

    constructor()
    {
        super();
        this.initListFromLocallStorage();
    }

    setList(list)
    {
        localStorage.setItem( KEY_LOCAL_STORAGE, JSON.stringify(list) );
    }

    initListFromLocallStorage()
    {
       let str = localStorage.getItem(KEY_LOCAL_STORAGE);
       if(str !== null)
       {
           super.listWords = JSON.parse(str);
       }
    }

} 