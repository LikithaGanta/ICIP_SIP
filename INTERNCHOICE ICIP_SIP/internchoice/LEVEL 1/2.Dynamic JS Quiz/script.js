const quizData = [
    {
      question: 'What is the capital city of France?',
      answers: ['Paris', 'Madrid', 'London', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which is the largest planet in our solar system?',
      answers: ['Jupiter', 'Mars', 'Saturn', 'Earth'],
      correctAnswer: 'Jupiter'
    },
    {
      question: 'What year was JavaScript first released?',
      answers: ['1995', '2000', '1985', '1990'],
      correctAnswer: '1995'
    },
    {
      question: 'What does HTML stand for?',
      answers: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
      correctAnswer: 'Hyper Text Markup Language'
    },
    {
      question: 'Which of the following is not a JavaScript framework?',
      answers: ['React', 'Angular', 'Vue', 'Java'],
      correctAnswer: 'Java'
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById('question-container');
  const answerContainer = document.getElementById('answer-container');
  const nextButton = document.getElementById('next-button');
  const resultContainer = document.getElementById('result-container');
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
  
    answerContainer.innerHTML = '';
  
    for (let i = 0; i < currentQuizData.answers.length; i++) {
      const answerOption = document.createElement('div');
      answerOption.classList.add('answer-option');
      answerOption.innerText = currentQuizData.answers[i];
      answerContainer.appendChild(answerOption);
    }
  }
  
  function checkAnswer(selectedAnswer) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedAnswer === currentQuizData.correctAnswer) {
      score++;
    }
  }
  
  function showNextQuestion() {
    checkAnswer();
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionContainer.innerText = '';
    answerContainer.innerHTML = '';
    nextButton.style.display = 'none';
  
    resultContainer.innerText = `You scored ${score} out of ${quizData.length} questions.`;
    resultContainer.style.display = 'block';
  }
  
  loadQuestion();
  
  nextButton.addEventListener('click', showNextQuestion);
  
  answerContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('answer-option')) {
      const selectedAnswer = event.target.innerText;
      checkAnswer(selectedAnswer);
      answerContainer.style.pointerEvents = 'none';
    }
  });
  