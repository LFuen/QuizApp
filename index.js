/**
 * Example store structure
 */

 const store = {
     // 5 or more questions required
     questions: [
         {question: '', answer: [], correctAnswer: ''},
         {question: '', answer: [], correctAnswer: ''},
         {question: '', answer: [], correctAnswer: ''},
         {question: '', answer: [], correctAnswer: ''},
         {question: '', answer: [], correctAnswer: ''} 
        ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
 };


 /**
  * 
  * Technical requirements:
  * 
  * App should include a render() function, that regenerates the view each time the store is updated.
  * See course material and access support for more details.
  * 
  * NO additional HTML elements should be added to the HTML file.
  * 
  * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or
  * additional scripts if necessary
  * 
  * Types of functions needed to be created:
  * 
  * ******** TEMPLATE GENERATION FUNCTIONS ***********
  * 
  * These functions return HTML templates
  * 
  * ******** RENDER FUNCTIONS *************
  * 
  * This function conditionally replaces the contents of the <main> tag based on the state of the store
  * 
  * ******** EVENT HANDLER FUNCTIONS ***********
  * 
  * These functions handle event (submit, click, etc)
  */