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
         'Tarzan'], correctAnswer: 'Lion'},
         {question: 'What does the "19" in COVID-19 stand for?', answer: ['The year', 'Strain', 
         'Amount of people it killed', 'No one knows, really'], correctAnswer: 'The year'},
         {question: 'How many colors are in the rainbow?', answer: ['12', '7', '5', '36'], 
         correctAnswer: '7'},
         {question: 'When did the Miami Heat last win an NBA Championship?', answer: ['1932', '2001',
          '2012', '2013'], correctAnswer: '2013'} 
        ],
    quizStarted: false,
    questionNumber: 0,
    score: 0,
    wrong: 0
 };

 let wrong = 0;
 let question = store.questionNumber;


$('main').append('<button id="start" class="begin">Start Quiz</button>');
$('#start').on('click', function () {
    loadQuestion(store);
});


 function loadQuestion(store) {
    var currentQuestion = store.questions[store.questionNumber];
    var templateHTML = `<div class="questions">
    <h2 id="question">${currentQuestion.question}</h2>
    <form>
    <input type="radio" id="ans1" name="quest" value=${currentQuestion.answer[0]}>
    <label for="male">${currentQuestion.answer[0]}</label><br>
    <input type="radio" id="ans2" name="quest" value=${currentQuestion.answer[1]}>
    <label for="female">${currentQuestion.answer[1]}</label><br>
    <input type="radio" id="ans3" name="quest" value=${currentQuestion.answer[2]}>
    <label for="other">${currentQuestion.answer[2]}</label><br>
    <input type="radio" id="ans4" name="quest" value=${currentQuestion.answer[3]}>
    <label for="other">${currentQuestion.answer[3]}</label>
    </form>  
    </div>

      <div>
        <button id="submit">Submit Answer</button>
      </div>`;

    $('main').html(templateHTML);
    $('#submit').on('click', () => {
        loadAnswer(store);
    });
};


// // create function using 'store' as a parameter
// // use variable 'createQuestion' to load each question 'store.questions[store.questionNumber]'


function loadAnswer(store) {
    let correctAnswer = store.questions[store.questionNumber].correctAnswer;
    let guess = $('input[type="radio"]:checked').val();
    let templateHTML = '';
    console.log(guess, correctAnswer);
    if (guess === correctAnswer) {
        store.score++;
        templateHTML = `<div class="questions">
   <h1 id="question">CORRECT!</h2>
   <button id="next">Next Question</button>
     </div>`;
    } else {
        store.wrong++;
        templateHTML = `<div class="questions">
   <h1 id="question">OH NO...</h2>
   <h3>The correct answer is <br> ${correctAnswer}<h3>
   <button id="next">Next Question</button>
     </div>`;
    }
    $('main').html(templateHTML);
    $('#next').on('click', function () {
        store.questionNumber++;
        loadQuestion(store);
    });
}


// new function for when the last question is asked, show the results of the quiz

function results() {
    return `<div class="questions">
    <h1 id="question">And the Results Are...</h2>

    <p class="fontSize"> You scored <br> ${store.score} / 4 <br>
      </div>`;
};













