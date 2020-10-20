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
          correctAnswer: 'Georgia'},

         {id: cuid(), 
          question: 'War, what is is good for?', 
          answer: ['Destruction', 'Sweet military uniforms', 'Absolutely nothing',
         'Spending heaps of money'], 
         correctAnswer: 'Absolutely nothing'},

         {id: cuid(), 
          question: 'What does the "19" in COVID-19 stand for?', 
          answer: ['The year', 'The strain', 'Amount of people it killed', 'No one knows, really'], 
         correctAnswer: 'The year'},

         {id: cuid(), 
          question: 'How many colors are in the rainbow?', 
          answer: ['12', '7', '5', '36'], 
         correctAnswer: '7'},

         {id: cuid(), 
          question: 'What is the meaning of life?', 
          answer: ['Yes', 'Eating cheese', `Being able to solve a Rubik's cube in under 3 minutes`, '42'], 
          correctAnswer: '42'} 
        ],

    quizStarted: false,
    questionNumber: 0,
    score: 0,
    wrong: 0
 };



// function pictures(){
// $('main').html(
// ` <img src="images/1world.jpg" id="world">
// <img src="images/2war.jpg" id="war">
// <img src="images/3covid.jpg" id="covid">
// <img src="images/4rainbow.jpg" id="rainbow">
// <img src="images/5life.jpg" id="life">`
//   )};

// let world = document.getElementById("world");
// let war = document.getElementById("war");
// let covid = document.getElementById("covid");
// let rainbow = document.getElementById("rainbow");
// let life = document.getElementById("life");

// let images = [world, war, covid, rainbow, life];






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
  $('#picture').css('background-image', 'url(images/1world.jpg)');  

    let currentQuestion = store.questions[store.questionNumber];
    
    let templateHTML =
     `<div class="questions boxed" id="picture">
     <h3> Question: ${store.questionNumber + 1} / ${store.questions.length} </h3>
    <h2 id="question">${currentQuestion.question}</h2>
    <form class="boxed">
    <input type="radio" id="ans1" name="quest" value="${currentQuestion.answer[0]}">
    <label for="male">${currentQuestion.answer[0]}</label><br>
    <input type="radio" id="ans2" name="quest" value="${currentQuestion.answer[1]}">
    <label for="female">${currentQuestion.answer[1]}</label><br>
    <input type="radio" id="ans3" name="quest" value="${currentQuestion.answer[2]}">
    <label for="other">${currentQuestion.answer[2]}</label><br>
    <input type="radio" id="ans4" name="quest" value="${currentQuestion.answer[3]}">
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

    if (guess === correctAnswer) {
        store.score++;
        templateHTML =
         `<div class="questions boxed">
              <h1 id="question" class="smaller">CORRECT!</h2>
              <button id="next">Next Question</button>
              <h5>So far: ${store.score} / 5</h5>
          </div>`;

    } else {
        store.wrong++;
        templateHTML = 
          `<div class="questions boxed">
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







