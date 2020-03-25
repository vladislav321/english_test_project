import { LessonsSorter } from "../../WordsRepositoryFunc/LessonsSorter";
import { WordsDTO } from "../../Model/WordsDTO";
import { MockListWords } from "../MockData/MockListWords";
import { MockInCorrectWords } from "../MockData/MockInCorrectWord";
import { LessonPersent } from "../../Model/LessonPersent";


test('Test LessonSorter getListLessonsWithPercet', () => {
   
    //test data
    let listWords = new MockListWords().getListWods();
    let incorectList = new MockInCorrectWords().getListWods();
  
    let lessonSorter = new LessonsSorter(listWords);

    // action
   
    let action = lessonSorter.getListLessonsWithPercet(incorectList);

    //expectation

    let expectation = new Array<LessonPersent>();
    
    expectation.push(new LessonPersent().setLessons("1").setLessonsId(1).setPersent(30));
    expectation.push(new LessonPersent().setLessons("2").setLessonsId(2).setPersent(20));
    expectation.push(new LessonPersent().setLessons("3").setLessonsId(3).setPersent(40));
    expectation.push(new LessonPersent().setLessons("4").setLessonsId(4).setPersent(100));


    expect(action[0]).toStrictEqual(expectation[0]);
    expect(action[1]).toStrictEqual(expectation[1]);
    expect(action[2]).toStrictEqual(expectation[2]);
    expect(action[3]).toStrictEqual(expectation[3]);

    expect(action.length).toBe(expectation.length);

    

  });

  test('Test LessonSorter Persent Test 1', () => {
   
    //test data

    let lessonListSize: number = 10;
    let inCorrectListSize: number = 3;

    let obj = new LessonsSorter(new Array<WordsDTO>());

    // action
    let action = obj.getPersent(lessonListSize, inCorrectListSize);

    //expectation

    let expectation = 30;

    expect(action).toBe(expectation);

    

  });

  test('Test LessonSorter Persent Test 2', () => {
   
    //test data

    let lessonListSize: number = 12;
    let inCorrectListSize: number = 3;

    let obj = new LessonsSorter(new Array<WordsDTO>());

    // action
    let action = obj.getPersent(lessonListSize, inCorrectListSize);

    //expectation

    let expectation = 25;

    expect(action).toBe(expectation);

    

  });

  test('Test LessonSorter Persent Test 3', () => {
   
    //test data

    let lessonListSize: number = 12;
    let inCorrectListSize: number = 1;

    let obj = new LessonsSorter(new Array<WordsDTO>());

    // action
    let action = obj.getPersent(lessonListSize, inCorrectListSize);

    //expectation

    let expectation = 8;

    expect(action).toBe(expectation);

    

  });

  
  test('Test LessonSorter Persent Test 4', () => {
   
    //test data

    let lessonListSize: number = 10;
    let inCorrectListSize: number = 1;

    let obj = new LessonsSorter(new Array<WordsDTO>());

    // action
    let action = obj.getPersent(lessonListSize, inCorrectListSize);

    //expectation

    let expectation = 10;

    expect(action).toBe(expectation);

    

  });