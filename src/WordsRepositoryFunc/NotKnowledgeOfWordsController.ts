import { WordsDTO } from "../Model/WordsDTO"
import { NotKnowledgeOfWords } from "./NotKnowledgeOfWords"
import {WordsController} from "./WordsController";


class NotKnowledgeOfWordsController extends WordsController  {
   
    private notKnowledgeOfWords: NotKnowledgeOfWords;

    constructor(listWords: Array<WordsDTO>, notKnowledgeOfWords: NotKnowledgeOfWords)
    {
        super(listWords);

        this.notKnowledgeOfWords = notKnowledgeOfWords;
    }

    public setCurrentWordsModel(model: WordsDTO) : void {
        this.notKnowledgeOfWords.decrementSucssesCount(model);
    }
  
}

export {NotKnowledgeOfWordsController}