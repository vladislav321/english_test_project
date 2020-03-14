import { IWrapperLocalStorage } from './../Model/WrapperLocalStorage/IWrapperLocalStarage';
import { WordsDTO } from "../Model/WordsDTO";

class NotKnowledgeOfWords {

    private listWords: Array<WordsDTO> = new Array<WordsDTO>();
    private keyLocalStorage: string = "NotKnowledgeOfWords";

    private wrapperLocalStorage: IWrapperLocalStorage;

    constructor(wrapperLocalStorage: IWrapperLocalStorage)
    {
        this.wrapperLocalStorage = wrapperLocalStorage;

        this.initList();
    }

    public setModel(model: WordsDTO) : void 
    {
        let resultFind = this.listWords.find(f=>f.En === model.En);
        if(!resultFind) return;

        this.listWords.push(model);
    }

    public getListWords(): Array<WordsDTO>
    {
        return this.listWords;
    }

    public saveListInLocalStorage(): void 
    {
        this.wrapperLocalStorage.setItem(this.keyLocalStorage, JSON.stringify(this.listWords))
    }

    private initList(): void 
    {
        let strJson = this.wrapperLocalStorage.getItem(this.keyLocalStorage);
        if(!strJson) return;

        this.listWords = JSON.parse(strJson);
    }

}


export {NotKnowledgeOfWords}