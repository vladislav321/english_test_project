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
        model.SucssesCount = 5;
        this.listWords.push(model);
    }

    public decrementSucssesCount(model: WordsDTO):void {
        if(model.SucssesCount > 0) 
        {
            model.SucssesCount = model.SucssesCount - 1;
        }
        else
        {
            const index = this.listWords.indexOf(model, 0);
            if (index > -1) {
                this.listWords.splice(index, 1);
            }
        }
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