import { InCorrectWordsState } from './../../WordsRepositoryFunc/WordsControllerState/InCorrectWordsState';
import { MockInCorrectWords } from "../MockData/MockInCorrectWord";
import { MockListWords } from "../MockData/MockListWords";


test('Test LessonSorter getListLessonsWithPercet', () => {
   
    //test data
    let inCorrectList = new MockInCorrectWords().getListWrongOrder();

    // action
    let listSort = new MockListWords().getCorrectSortList();
    //expectation

    let inCorrectWordsState = new InCorrectWordsState(inCorrectList).listWords;
    
    expect(inCorrectWordsState).toStrictEqual(listSort);
  });