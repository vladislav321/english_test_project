import WordsList from './../../WordsRepository/WordsList';

test('Test: "listAllWords" Set null in WordsList', () => {
   
    //test data

    let model = GetInstanceWordsList();
   

    // action
    model.setList(null);
    let newList = model.getList();

    //expectation
    expect(newList.length).toBe(0);

  });

  test('Test: "listAllWords" isListEmpty result true', () => {
   
    //test data
    let model = GetInstanceWordsList();
   

    // action
    model.setList(null);
    let isListEmpty = model.isListEmpty();

    //expectation
    expect(isListEmpty).toBe(true);

  });

test('Test: "listAllWords" add new list', () => {
   
    //test data
    let model = GetInstanceWordsList();
    SetListWords(model);
    SetListWords(model);

    // action
    
    let newList = model.getList();

    //expectation

    expect(newList.length).toBe(7);

  });

  test('Test: "listAllWords" isListEmpty result true', () => {
   
    //test data
    let model = GetInstanceWordsList();
    

    // action
    let isListEmpty = model.isListEmpty();

    //expectation
    expect(isListEmpty).toBe(true);

  });

  test('Test: "listAllWords" Find by lessons', () => {
   
    //test data
    let model = GetInstanceWordsList();
    SetListWords(model);
    let lessons = "LESSONONE";

    // action
   
    let newList = model.getListByLessons(lessons);
    
    //expectation

    expect(newList.length).toBe(3);

  });


  test('Test: "listAllWords" Find by null', () => {
   
    // test data

    let model = GetInstanceWordsList();
    SetListWords(model);

    // action
   
    let newList = model.getListByLessons(null);
    //expectation

    expect(newList.length).toBe(7);

  });

  test('Test: "listAllWords" Find by unCurrect key', () => {
   
    // test data
    let model = GetInstanceWordsList();
    SetListWords(model);
    let lessons = "qwe";
    // action
   
    let newList = model.getListByLessons(lessons);
    //expectation

    expect(newList.length).toBe(0);

  });

  test('Test: "listAllWords" getModelFromLessonByWordsCount Test One', () => {
   
    // test data
    let model = GetInstanceWordsList();
    SetListWords(model);
    let lessons = "LESSONONE";
    let wordsCount = 2;
    // action
   
    let newList = model.getModelFromLessonByWordsCount(lessons,wordsCount);
    //expectation
    expect(newList.en).toBe('relux');

  });

  test('Test: "listAllWords" getModelFromLessonByWordsCount OutOfRange', () => {
   
    // test data
    let model = GetInstanceWordsList();
    SetListWords(model);
    let lessons = "LESSONONE";
    let wordsCount = 3;
    // action
   
    let newList = model.getModelFromLessonByWordsCount(lessons,wordsCount);
    //expectation
    expect(newList).toBe(null);

  });

  test('Test: "listAllWords" GetListLessons', () => {
   
    // test data
    let model = GetInstanceWordsList();
    SetListWords(model);
    let lessonOne = "LESSONONE";
    let lessonTwo = "LESSONTWO";
    let lessonFree = "LESSONTHREE";
    // action
   
    let newList = model.getListLessons();
    //expectation
    expect(newList.length).toBe(3);
    expect(newList[0].Lessons).toBe(lessonOne);
    expect(newList[1].Lessons).toBe(lessonTwo);
    expect(newList[2].Lessons).toBe(lessonFree);

  });


const GetInstanceWordsList = () => new WordsList();

const SetListWords = (obj) => obj.setList(GetMockList());

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