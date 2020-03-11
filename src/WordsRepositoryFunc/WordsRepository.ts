import { WordsDTO } from "../Model/WordsDTO";

const KEY_LOCAL_STORAGE = "keyLocalStorageListWords";

export default class WordsRepository  {
    
    private static instance: WordsRepository;

    private constructor() {}

    private listWords: Array<WordsDTO> = new Array<WordsDTO>();

    public static getInstance(): WordsRepository {
        if(!WordsRepository.instance) {
            WordsRepository.instance = new WordsRepository();
        }

        return WordsRepository.instance;
    }

    public setList(list: Array<WordsDTO>): void
    {
        this.listWords = list;
        localStorage.setItem( KEY_LOCAL_STORAGE, JSON.stringify(list) );
    }

    public getList(): Array<WordsDTO>
    {
        if(this.listWords.length === 0)
        {
           return this.getListFromLocalStorage();
        }
        else
        {
           return this.listWords;
        }
    }

    public getListFromLocalStorage(): Array<WordsDTO>
    {
        let str = localStorage.getItem(KEY_LOCAL_STORAGE);
        if(str !== null){
            return this.listWords = JSON.parse(str);
        }else{
            let mockList = new Array<WordsDTO>();
            mockList.push(new WordsDTO())
            return mockList;
        }
    }

    public isNullOrEmptyListWords(): boolean
    {
        return this.listWords.length === 0 ? true : false;
    }

    public clearRepo(): void
    {
        localStorage.removeItem(KEY_LOCAL_STORAGE);
        this.listWords = [];
    }

}

//export { WordsRepository };
