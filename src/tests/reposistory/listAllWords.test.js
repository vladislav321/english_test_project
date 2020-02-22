import {SetListWords, GetListWords, GetListWordsByLessons} from './../../MockWordsRepository/listAllWords';

test('Test: "listAllWords" Set null in SetListWords', () => {
   
    //test data

    // action
    SetListWords(null);
    let newList = GetListWords();

    //expectation
    expect(newList.length).toBe(0);

  });

test('Test: "listAllWords" add new list', () => {
   
    //test data
    let listWords = GetMockList();

    // action
    SetListWords(listWords);
    SetListWords(listWords);
    let newList = GetListWords();

    //expectation

    expect(newList.length).toBe(4);

  });

  test('Test: "listAllWords" Find by lessons', () => {
   
    //test data
    let lessons = "lessonsOne";

    // action
   
    let newList = GetListWordsByLessons(lessons);
    //expectation

    expect(newList.length).toBe(3);

  });


  test('Test: "listAllWords" Find by null', () => {
   
    // test data

    // action
   
    let newList = GetListWordsByLessons(null);
    //expectation

    expect(newList.length).toBe(4);

  });

  test('Test: "listAllWords" Find by unCurrect key', () => {
   
    // test data
    let lessons = "qwe";
    // action
   
    let newList = GetListWordsByLessons(lessons);
    //expectation

    expect(newList.length).toBe(0);

  });


  const GetMockList = () => {
        let list = [
            {id: 1, en: 'very much', ru: 'очень', lessons: 'lessonsOne'},
            {id: 2, en: 'a lot of', ru: 'много', lessons: 'lessonsOne'},
            {id: 3, en: 'relux', ru: 'отдих', lessons: 'lessonsOne'},
            {id: 4, en: 'lessons', ru: 'уроки', lessons: 'lessonsTwo'}
        ]

      return list;
  }