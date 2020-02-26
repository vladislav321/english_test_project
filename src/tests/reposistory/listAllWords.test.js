import WordsList from './../../WordsRepository/WordsList';

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  WordsList.mockClear();
});

test('Test: "listAllWords" Set null in SetListWords', () => {
   
    //test data

    let model = new WordsList();

    debugger;
    // action
    WordsList.setLists(null);
    let newList = WordsList.getList();

    //expectation
    expect(newList.length).toBe(0);

  });

//   test('Test: "listAllWords" isListEmpty result true', () => {
   
//     //test data

//     // action
//     ListWords.setList(null);
//     let isListEmpty = ListWords.isListEmpty();

//     //expectation
//     expect(isListEmpty).toBe(true);

//   });

// test('Test: "listAllWords" add new list', () => {
   
//     //test data
//     let listWords = GetMockList();

//     // action
//     ListWords.setList(listWords);
//     ListWords.setList(listWords);
//     let newList = ListWords.getList();

//     //expectation

//     expect(newList.length).toBe(7);

//   });

//   test('Test: "listAllWords" isListEmpty result false', () => {
   
//     //test data

//     // action
//     let isListEmpty = ListWords.isListEmpty();

//     //expectation
//     expect(isListEmpty).toBe(false);

//   });

//   test('Test: "listAllWords" Find by lessons', () => {
   
//     //test data
//     let lessons = "LESSONONE";

//     // action
   
//     let newList = ListWords.getListByLessons(lessons);
    
//     //expectation

//     expect(newList.length).toBe(3);

//   });


//   test('Test: "listAllWords" Find by null', () => {
   
//     // test data

//     // action
   
//     let newList = ListWords.getListByLessons(null);
//     //expectation

//     expect(newList.length).toBe(7);

//   });

//   test('Test: "listAllWords" Find by unCurrect key', () => {
   
//     // test data
//     let lessons = "qwe";
//     // action
   
//     let newList = ListWords.getListByLessons(lessons);
//     //expectation

//     expect(newList.length).toBe(0);

//   });

//   test('Test: "listAllWords" getModelFromLessonByWordsCount Test One', () => {
   
//     // test data
//     let lessons = "LESSONONE";
//     let wordsCount = 2;
//     // action
   
//     let newList = ListWords.getModelFromLessonByWordsCount(lessons,wordsCount);
//     //expectation
//     expect(newList.en).toBe('relux');

//   });

//   test('Test: "listAllWords" getModelFromLessonByWordsCount OutOfRange', () => {
   
//     // test data
//     let lessons = "LESSONONE";
//     let wordsCount = 3;
//     // action
   
//     let newList = ListWords.getModelFromLessonByWordsCount(lessons,wordsCount);
//     //expectation
//     expect(newList).toBe(null);

//   });

//   test('Test: "listAllWords" GetListLessons', () => {
   
//     // test data
//     let lessonOne = "LESSONONE";
//     let lessonTwo = "LESSONTWO";
//     let lessonFree = "LESSONTHREE";
//     // action
   
//     let newList = ListWords.getListLessons();
//     //expectation
//     expect(newList.length).toBe(3);
//     expect(newList[0].Lessons).toBe(lessonOne);
//     expect(newList[1].Lessons).toBe(lessonTwo);
//     expect(newList[2].Lessons).toBe(lessonFree);

//   });


  const GetMockList = () => {
        let list = [
            {WordsCount: 0, en: 'very much', ru: 'очень', Lessons: 'LESSONONE'},
            {WordsCount: 1, en: 'a lot of', ru: 'много', Lessons: 'LESSONONE'},
            {WordsCount: 2, en: 'relux', ru: 'отдих', Lessons: 'LESSONONE'},
            {WordsCount: 0, en: 'lessons', ru: 'уроки', Lessons: 'LESSONTWO'},
            {WordsCount: 1, en: 'exchange', ru: 'обмен', Lessons: 'LESSONTWO'},
            {WordsCount: 0, en: 'rich', ru: 'богатый', Lessons: 'LESSONTHREE'},
            {WordsCount: 1, en: 'quiet', ru: 'тихий', Lessons: 'LESSONTHREE'}
        ]

      return list;
  }