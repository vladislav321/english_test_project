import { IWrapperLocalStorage } from '../Model/WrapperLocalStorage/IWrapperLocalStarage';
import { WordsDTO } from "../Model/WordsDTO";

class InCorectWords {

    private listWords: Array<WordsDTO> = new Array<WordsDTO>();
    private keyLocalStorage: string = "NotKnowledgeOfWords";

    private wrapperLocalStorage: IWrapperLocalStorage;

    constructor(wrapperLocalStorage: IWrapperLocalStorage)
    {
        this.wrapperLocalStorage = wrapperLocalStorage;
        console.log("--- NotKnowledgeOfWords constructor --")
        this.initList();

        console.log("--- list words --" + this.listWords.length);
    }

    public setModel(model: WordsDTO) : void 
    {
        console.log("setMode: " + model.SucssesCount);
        let resultFind = this.listWords.find(f=>f.Id === model.Id);
        if(resultFind) return;
        model.SucssesCount = 5;
        this.listWords.push(model);
        console.log("setMode: " + model.En);
    }

    public decrementSucssesCount(model: WordsDTO):void {
      
        if(model.SucssesCount > 0) 
             model.SucssesCount = model.SucssesCount - 1;

        console.log("decrementSucssesCount: " + model.SucssesCount);
    }

    public getListWords(): Array<WordsDTO>
    {
        return this.listWords;
    }

    public saveListInLocalStorage(): void 
    {
        this.listWords = this.listWords.filter(f=> f.SucssesCount !== 0);
        console.log("---saveListInLocalStorage---")
        this.wrapperLocalStorage.setItem(this.keyLocalStorage, JSON.stringify(this.listWords))
    }

    private initList(): void 
    {
        let strJson = this.wrapperLocalStorage.getItem(this.keyLocalStorage);
        if(!strJson) return;

        this.listWords = JSON.parse(strJson);
    }

}


export {InCorectWords}