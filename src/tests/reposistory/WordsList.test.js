import WordsList from '../../WordsRepository/WordsList';

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

  test('Test: "listAllWords" Find by lessons', () => {
   
    //test data
    let model = GetInstanceWordsList();
    SetListWords(model);
    let lessons = "1";

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
    let lessons = "1";
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
    let lessons = "1";
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
    let lessonOne = "1";
    let lessonTwo = "2";
    let lessonFree = "3";
    // action
   
    let newList = model.getListLessons();
    //expectation
    expect(newList.length).toBe(3);
    expect(newList[0].Lessons).toBe(lessonOne);
    expect(newList[1].Lessons).toBe(lessonTwo);
    expect(newList[2].Lessons).toBe(lessonFree);

  });

  test('Test: "listAllWords" Next Lessons', () => {
   
    // test data
    let model = GetInstanceWordsList();
    SetListWords(model);
    let lessonOne = "1";
    let lessonTwo = "2"
  
    // action
   
    let listNextLesson = model.getModelNextLessons(lessonOne);
    //expectation
    expect(listNextLesson.Lessons).toBe(lessonTwo);

  });

  test('Test: "listAllWords" Next Lessons OutOfRange', () => {
   
    // test data
    let model = GetInstanceWordsList();
    SetListWords(model);
    let lessonOne = "3";
    let lessonTwo = "1"
  
    // action
   
    let listNextLesson = model.getModelNextLessons(lessonOne);
    //expectation
    expect(listNextLesson.Lessons).toBe(lessonTwo);

  });

  test('Test: "listAllWords" Previus Lessons OutOfRange', () => {
   
    // test data
    let model = GetInstanceWordsList();
    SetListWords(model);
    let lessonOne = "3";
    let lessonTwo = "2"
  
    // action
   
    let listNextLesson = model.getModelPreviusLessons(lessonOne);
    //expectation
    expect(listNextLesson.Lessons).toBe(lessonTwo);

  });

  test('Test: "listAllWords" Previus Lessons return one Lesson', () => {
   
    // test data
    let model = GetInstanceWordsList();
    SetListWords(model);
    let lessonOne = "1";
    let lessonTwo = "1"
  
    // action
   
    let listNextLesson = model.getModelPreviusLessons(lessonOne);
    //expectation
    expect(listNextLesson.Lessons).toBe(lessonTwo);

  });


const GetInstanceWordsList = () => new WordsList();

const SetListWords = (obj) => obj.setList(GetMockList());

  const GetMockList = () => {
        let list = [
            {WordsCount: 0, en: 'very much', ru: 'очень', Lessons: '1'},
            {WordsCount: 1, en: 'a lot of', ru: 'много', Lessons: '1'},
            {WordsCount: 2, en: 'relux', ru: 'отдих', Lessons: '1'},
            {WordsCount: 0, en: 'lessons', ru: 'уроки', Lessons: '2'},
            {WordsCount: 1, en: 'exchange', ru: 'обмен', Lessons: '2'},
            {WordsCount: 0, en: 'rich', ru: 'богатый', Lessons: '3'},
            {WordsCount: 1, en: 'quiet', ru: 'тихий', Lessons: '3'}
        ]

      return list;
  }