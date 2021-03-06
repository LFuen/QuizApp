/**
 * Example store structure
 * 
 * 
 */




 const store = {
     // 5 or more questions required
     questions: [
         {id: cuid(), 
          question: 'What country shares the name of a state of North America?', 
          answer: ['Mississippi', 'Michigan', 'Georgia', 'Vermont'], 
          correctAnswer: 'Georgia', background: 'images/1world.jpg'},

         {id: cuid(), 
          question: 'War, what is is good for?', 
          answer: ['Destruction', 'Sweet military uniforms', 'Absolutely nothing',
         'Spending heaps of money'], 
         correctAnswer: 'Absolutely nothing', background: 'images/2war.jpg'},

         {id: cuid(), 
          question: 'What does the "19" in COVID-19 stand for?', 
          answer: ['The year', 'The strain', 'Amount of people it killed', 'No one knows, really'], 
         correctAnswer: 'The year', background: 'images/3covid.jpg'},

         {id: cuid(), 
          question: 'How many colors are in the rainbow?', 
          answer: ['12', '7', '5', '36'], 
         correctAnswer: '7', background: 'images/4rainbow.jpg'},

         {id: cuid(), 
          question: 'What is the meaning of life?', 
          answer: ['Yes', 'Eating cheese', `Being able to solve a Rubik's cube in under 3 minutes`, '42'], 
          correctAnswer: '42', background: 'images/5life.jpg'} 
        ],

    quizStarted: false,
    questionNumber: 0,
    score: 0,
    wrong: 0, 
    correct: 'images/correct.jpg',
    incorrect: 'images/incorrect.jpg'
 };




 let wrong = 0;
 let question = store.questionNumber;


function render(){
  if(store.quizStarted === false) {
    $('main').html('<button id="start" class="begin">Start Quiz</button>');
    $('#start').on('click', function () {
      loadQuestion(store);
  });
  }
}



 function loadQuestion(store) {

  if(store.questionNumber === store.questions.length) {
    return results();
  }

    let currentQuestion = store.questions[store.questionNumber];
    let currentPic = currentQuestion.background;
    
    let templateHTML =`
    <div class="questions boxed" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${currentPic}) no-repeat;
    background-size: 100%;">
    <h3> Question: ${store.questionNumber + 1} / ${store.questions.length} </h3>
    <h2 id="question">${currentQuestion.question}</h2>
    <form class="boxed">
    <input type="radio" name="quest" value="${currentQuestion.answer[0]}" required/>
    <label for="male">${currentQuestion.answer[0]}</label><br>
    <input type="radio" name="quest" value="${currentQuestion.answer[1]}">
    <label for="female">${currentQuestion.answer[1]}</label><br>
    <input type="radio" name="quest" value="${currentQuestion.answer[2]}">
    <label for="other">${currentQuestion.answer[2]}</label><br>
    <input type="radio" name="quest" value="${currentQuestion.answer[3]}">
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

    if(guess === undefined) {
      alert('Dude, at least guess! Since you tried to best me, now you have to start all over...');
      location.reload();

    } else if(guess === correctAnswer && !undefined) {
        store.score++;
        templateHTML =
         `<div class="right">
              <h1 id="question" class="smaller">CORRECT!</h2>
              <button id="next">Next Question</button>
              <h5>So far: ${store.score} / 5</h5>
          </div>`;

    } else {
        store.wrong++;
        templateHTML = 
          `<div class="wrong">
              <h1 id="question">OH NO...</h2>
              <h3>The correct answer is <br> ${correctAnswer}<h3>
              <button id="next">Next Question</button>
              <h5>So far: ${store.score} / ${store.questions.length}</h5>
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
  let templateHTML = 
  `<div class="questions boxed">
  <h3> Psyche! No more questions! </h3> 

  <h1 id="question">And the Results Are...</h2>

  <h3> Dude, you scored <br> ${store.score} / 5! </h3>
  <button id="again"> Again? </button>
    </div>`;
    
  $('main').html(templateHTML);
  $('#again').on('click', function() {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    loadQuestion(store);
  });
};


// adding random animations to play around with jQ libraries

$(function() {
  $('h1').hover(function(e) { 
    $(this).addClass('animate__animated animate__shakeX');
  }, 
  function(e) {    
    $(this).removeClass('animate__animated animate__shakeX');
    });
});



$(render);







