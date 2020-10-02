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
         {question: 'What does the "19" in COVID-19 stand for?', answer: ['The year', 'Strain store.questionNumber', 
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
         $('#next').on('click', function() {
            question++;
             $('main').html(getHTML(store));
            $('#submit').on('click', function() {
                $('main').html(rightAns(store));
                $('#next').on('click', function() {
                    question++;
                    $('main').html(getHTML(store));
                    $('#submit').on('click', function() {
                        $('main').html(rightAns(store));
                        $('#next').on('click', function() {
                            question++;
                            $('main').html(getHTML(store));
                            $('#submit').on('click', function() {
                                $('main').html(rightAns(store));
                                $('#next').on('click', function() {
                                    question++;
                                    $('main').html(getHTML(store));
                                    $('#submit').on('click', function() {
                                        $('main').html(rightAns(store));
                                        $('#next').on('click', function() {
                                            question++;
                                            $('main').html(getHTML(store));
                                            $('#submit').on('click', function() {
                                                $('main').html(rightAns(store));
                                                $('#next').on('click', function() {
                                                    question++;
                                                    $('main').html(getHTML(store));
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
            });
        });
    });
  });
});

 function getHTML(store) {
    
    return `<div class="questions">
    <h2 id="question">${store.questions[question].question}</h2>
        <form>
        <input type="radio" id="ans1" name="quest" value=${store.questions[question].answer[0]}>
        <label for="male">${store.questions[question].answer[0]}</label><br>

        <input type="radio" id="ans2" name="quest" value=${store.questions[question].answer[1]}>
        <label for="female">${store.questions[question].answer[1]}</label><br>

        <input type="radio" id="ans3" name="quest" value=${store.questions[question].answer[2]}>
        <label for="other">${store.questions[question].answer[2]}</label><br>

        <input type="radio" id="ans4" name="quest" value=${store.questions[question].answer[3]}>
        <label for="other">${store.questions[question].answer[3]}</label>
        </form> 
        </div>

      <div>
        <button id="submit">Submit Answer</button>
      </div>`;
};


function rightAns(store) {
    let correct = store.questions[question].correctAnswer;
    let wrong = 0;
     console.log(correct, $('input[name="quest"]:checked').val());
    if ($('input[name="quest"]:checked').val() === store.questions[question].correctAnswer) {
    store.score++;
    return `<div class="questions">
    <h1 id="question">CORRECT!</h2>

    <button id="next">Next Question</button>
      </div>`;
      
    } else {
        return `<div class="questions">
    <h1 id="question">OH NO...</h2>

    <h3>The correct answer is <br> ${store.questions[question].correctAnswer}<h3>

    <button id="next">Next Question</button>
      </div>`;
      store.wrong++;
    }
};


function results() {
    return `<div class="questions">
    <h1 id="question">And the Results Are...</h2>

    <button id="next">Next Question</button>
      </div>`;
}







