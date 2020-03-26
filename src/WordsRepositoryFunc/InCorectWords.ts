import { IWrapperLocalStorage } from '../Model/WrapperLocalStorage/IWrapperLocalStarage';
import { WordsDTO } from "../Model/WordsDTO";

class InCorectWords {

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
        let resultFind = this.listWords.find(f=>f.Id === model.Id || f.En === model.En);
        if(resultFind){
            console.log("уже есть: " + model.SucssesCount);
            return;
        } 
        model.SucssesCount = 5;
        this.listWords.push(model);
        console.log("setMode: " + model.En);
    }

    public decrementSucssesCount(model: WordsDTO):void {
      
        if(model.SucssesCount > 0) {
            let modelInCorrect = this.listWords.find(f=>f.Id === model.Id);

            if(!modelInCorrect) return

            modelInCorrect.SucssesCount = model.SucssesCount - 1;
            console.log("decrementSucssesCount: " + modelInCorrect.En);
        }
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

    public clearRepo(): void {
        this.wrapperLocalStorage.removeItem(this.keyLocalStorage);
    }

    private initList(): void 
    {
        let strJson = this.wrapperLocalStorage.getItem(this.keyLocalStorage);
       
        if(!strJson) return;

        this.listWords = JSON.parse(strJson);
    }

}


export {InCorectWords}