/**
 * Example store structure
 */

 const store = {
     // 5 or more questions required
     questions: [
         {question: 'What country shares the name of a state of North America?', answer: ['Mississippi',
         'b. Michigan', 'c. Georgia', 'd. Vermont'], correctAnswer: 'c. Georgia'},
         {question: 'Who is the proverbial "King of the Jungle"?', answer: ['a. Jorge', 'b. Tiger', 'c. Lion',
         'd. Tarzan'], correctAnswer: 'c. Lion'},
         {question: 'What does the "19" in COVID-19 stand for?', answer: ['a. The year', 'b. Strain number', 
         'c. Amount of people it killed', 'd. No one knows, really'], correctAnswer: 'a. The year'},
         {question: 'How many colors are in the rainbow?', answer: ['a. 12', 'b. 7', 'c. 5', 'd. 36'], 
         correctAnswer: 'b. 7'},
         {question: 'When did the Miami Heat last win an NBA Championship?', answer: ['a. 1932', 'b. 2001',
          'c. 2012', 'd. 2013'], correctAnswer: 'd. 2013'} 
        ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
 };

 let questNum = 0;

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
  */ 
 
  $('main').append('<button id="start" class="begin">Start Quiz</button>');
 
  $('#start').on('click', function() {
      $('main').html(getHTML(store, questNum));
  });


 function getHTML (store, number) {
    return `<div class="questions">
    <h2 id="question">${store.questions[number].question}</h2>
        <form>
        <input type="radio" id="ans1" name="gender" value="male">
        <label for="male">${store.questions[number].answer[0]}</label><br>

        <input type="radio" id="ans2" name="gender" value="female">
        <label for="female">${store.questions[number].answer[1]}</label><br>

        <input type="radio" id="ans3" name="gender" value="other">
        <label for="other">${store.questions[number].answer[2]}</label><br>

        <input type="radio" id="ans4" name="gender" value="other">
        <label for="other">${store.questions[number].answer[3]}</label>
        </form> 
        </div>

      <div>
        <button id="submit">Submit Answer</button>
      </div>`;
}

 $('#submit').on('click', function() {
    $('#submit').html(correct);
});


  /* ******** RENDER FUNCTIONS *************
  * 
  * This function conditionally replaces the contents of the <main> tag based on the state of the store
  * 
  */ 
   


  /* 
  * ******** EVENT HANDLER FUNCTIONS ***********
  * 
  * These functions handle event (submit, click, etc)
  */



let correct = rightAns();

function rightAns() {
   // if(userAnswer == store.questions[number].correctAnswer[0])
    return `<div class="questions">
    <h1 id="question">CORRECT!</h2>

    <button id="submit">Next Question</button>
      </div>`;
    
}







