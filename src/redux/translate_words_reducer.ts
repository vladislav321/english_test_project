import { InCorrectWordsState } from './../WordsRepositoryFunc/WordsControllerState/InCorrectWordsState';
import { CorrectWordsState } from './../WordsRepositoryFunc/WordsControllerState/CorrectWordsState';
import { TypeCurrectList } from './../Enum/TypeCurrectList';

import {GET_WORD_BY_NUMBER,
        NEXT_LESSON, PREVIUS_LESSON, GET_FIRST_MODEL,
        SET_WRONG_WORDS, SAVE_WRONG_WORDS,UPDATE_CURRECT_LIST,  GET_NEXT_WORD, GET_PREVIUS_WORD,
        InitStateType,
        GetWordFromLessonByNumberActionTypes, GetNextLessonActionTypes,
        GetPreviusLessonActionTypes , GetFirstModelActionType,
        SetWrongWordsActionType, SaveWrongWordsActionType, UpdateCurrectListActionType,
        GetNextWordAT, GetPreviusWordAT} from '../Types/TranslateWords/translate-words-types';

import { WordsDTO } from '../Model/WordsDTO';
import WordsRepository from './../WordsRepositoryFunc/WordsRepository';
import { InCorectWords } from '../WordsRepositoryFunc/InCorectWords';
import { WrapperLocalStorage } from '../Model/WrapperLocalStorage/WrapperLocalStorage';
import { WordsControllerState } from '../WordsRepositoryFunc/WordsControllerState/WordsControllerState';

// -- Init Object --

//let wordsController: WordsController = new WordsController(WordsRepository.getInstance().getList());
let inCorectWords: InCorectWords = new InCorectWords(new WrapperLocalStorage());
let wordsControllerState: WordsControllerState = new CorrectWordsState(WordsRepository.getInstance().getList());

// -- Init Object --

let initState : InitStateType = {
    model: new WordsDTO().setId("1").setLessonId(1).setWordsCount(1).setLesson("---").setEn("---").setRu("---")
}

const TranslateWordsReducer = (state: InitStateType = initState, action: ActionsTypes) : InitStateType => {

    switch(action.type)
    {
        case GET_WORD_BY_NUMBER:
            inCorectWords.decrementSucssesCount(action.model);
            return {...state, model: wordsControllerState.getWordsFromLesson(action.lessonId, action.number ) };

        case NEXT_LESSON:
            inCorectWords.saveListInLocalStorage();
            return {...state, model: wordsControllerState.getNextLesson(action.lessonId)};
        
        case PREVIUS_LESSON:
            inCorectWords.saveListInLocalStorage();
            return {...state, model: wordsControllerState.getPreviusLesson(action.lessonId)};

        case GET_FIRST_MODEL:
            console.log("GET_FIRST_MODEL : qwe")
            return {...state, model: wordsControllerState.getLessonModel( action.lessonId, 0 )}    

        case SET_WRONG_WORDS:
            inCorectWords.setModel(action.model);
            return state;    

        case SAVE_WRONG_WORDS:
            inCorectWords.saveListInLocalStorage();
            return state;  
         
        case GET_NEXT_WORD:
            return {...state, model: wordsControllerState.getNextWord(action.lessonId, action.wordCount) }    

        case GET_PREVIUS_WORD:
            return {...state, model: wordsControllerState.getPreviusWord(action.lessonId, action.wordCount) }    
            
        case UPDATE_CURRECT_LIST:
            if(action.typeList === TypeCurrectList.Currect){
                wordsControllerState = new CorrectWordsState(WordsRepository.getInstance().getList())
            }
            else{
                wordsControllerState = new InCorrectWordsState(inCorectWords.getListWords());
            }

            return state;

        default :
            return state;    
    }
}

type ActionsTypes = GetWordFromLessonByNumberActionTypes | GetNextLessonActionTypes | GetPreviusLessonActionTypes | 
GetFirstModelActionType | SetWrongWordsActionType | SaveWrongWordsActionType | UpdateCurrectListActionType | 
GetNextWordAT | GetPreviusWordAT;

export const getWordFromLessonByNumber = (lessonId: number, number: number, model: WordsDTO): GetWordFromLessonByNumberActionTypes  => ({type: GET_WORD_BY_NUMBER, lessonId, number, model})
export const getNextLesson = (lessonId: number): GetNextLessonActionTypes => ({type: NEXT_LESSON, lessonId});
export const getPreviusLesson = (lessonId: number): GetPreviusLessonActionTypes => ({type: PREVIUS_LESSON, lessonId});
export const getFirstModel = (lessonId: number): GetFirstModelActionType => ({type: GET_FIRST_MODEL, lessonId});
export const setWrongWords = (model: WordsDTO): SetWrongWordsActionType => ({type: SET_WRONG_WORDS, model});
export const saveWrongWods = (): SaveWrongWordsActionType => ({type: SAVE_WRONG_WORDS});
export const updateCurrectList = (typeList: TypeCurrectList): UpdateCurrectListActionType => ({type: UPDATE_CURRECT_LIST, typeList})
export const getNextWord = (lessonId: number, wordCount: number) : GetNextWordAT => ({type: GET_NEXT_WORD, lessonId, wordCount})
export const getPreviusWord = (lessonId: number, wordCount: number) : GetPreviusWordAT => ({type: GET_PREVIUS_WORD, lessonId, wordCount})

export default TranslateWordsReducer;

