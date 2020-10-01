/**
 * Example store structure
 * 
 * reference: https://stackoverflow.com/questions/23378676/check-if-selected-radio-button-equals-the-answer-stored-in-an-array
 */

 const store = {
     // 5 or more questions required
     questions: [
         {question: 'What country shares the name of a state of North America?', answer: ['Mississippi',
         'Michigan', 'Georgia', 'Vermont'], correctAnswer: 'Georgia'},
         {question: 'Who is the proverbial "King of the Jungle"?', answer: ['Jorge', 'Tiger', 'Lion',
         'Tarzan'], correctAnswer: 'c. Lion'},
         {question: 'What does the "19" in COVID-19 stand for?', answer: ['The year', 'Strain store.questionNumber', 
         'Amount of people it killed', 'No one knows, really'], correctAnswer: 'The year'},
         {question: 'How many colors are in the rainbow?', answer: ['12', '7', '5', '36'], 
         correctAnswer: '7'},
         {question: 'When did the Miami Heat last win an NBA Championship?', answer: ['1932', '2001',
          '2012', '2013'], correctAnswer: '2013'} 
        ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
 };



//   let q = 0;
//  let rb1 = 0;
//  let rb2 = 1;
//  let rb3 = 2;
//  let rb4 = 3;
//  let ans = 0;

//  let userScore = {right : 0, wrong : 0};

  $('main').append('<button id="start" class="begin">Start Quiz</button>');
 
  $('#start').on('click', function() {
      $('main').html(getHTML(store));
      $('#submit').on('click', function() {
        $('main').html(rightAns(store));
    });
  });

 function getHTML(store) {
    
//      let currentQuestion = (store.questions[q].question);
//  let currentRadio1 = (store.questions[store.questionNumber].answer[rb1]);
//  let currentRadio2 = (store.questions[store.questionNumber].answer[rb2]);
//  let currentRadio3 = (store.questions[store.questionNumber].answer[rb3]);
//  let currentRadio4 = (store.questions[store.questionNumber].answer[rb4]);
//  let currentAnswer = (store.questions[store.questionNumber].correctAnswer);
    
    return `<div class="questions">
    <h2 id="question">${store.questions[store.questionNumber].question}</h2>
        <form>
        <input type="radio" id="ans1" name="quest" value=${store.questions[store.questionNumber].answer[0]}>
        <label for="male">${store.questions[store.questionNumber].answer[0]}</label><br>

        <input type="radio" id="ans2" name="quest" value=${store.questions[store.questionNumber].answer[1]}>
        <label for="female">${store.questions[store.questionNumber].answer[1]}</label><br>

        <input type="radio" id="ans3" name="quest" value=${store.questions[store.questionNumber].answer[2]}>
        <label for="other">${store.questions[store.questionNumber].answer[2]}</label><br>

        <input type="radio" id="ans4" name="quest" value=${store.questions[store.questionNumber].answer[3]}>
        <label for="other">${store.questions[store.questionNumber].answer[3]}</label>
        </form> 
        </div>

      <div>
        <button id="submit">Submit Answer</button>
      </div>`;
};


function rightAns(store) {
    let correct = store.questions[store.questionNumber].correctAnswer;
     console.log(correct, $('input[name="quest"]:checked').val());
    if ($('input[name="quest"]:checked').val() === store.questions[store.questionNumber].correctAnswer) {
    store.score++;
    return `<div class="questions">
    <h1 id="question">CORRECT!</h2>

    <button id="submit">Next Question</button>
      </div>`;
      
    } else {
        return `<div class="questions">
    <h1 id="question">OH NO...</h2>

    <h3>The correct answer is <br> ${store.questions[store.questionNumber].correctAnswer}<h3>

    <button id="submit">Next Question</button>
      </div>`;
    }
};


//  $('#submit').on('click', function() {
//     $('#submit').html(rightAns(store));
// });







