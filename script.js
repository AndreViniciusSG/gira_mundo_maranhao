const questions = [
  {
    question: "Qual é o maior oceano do planeta?",
    answers: [
      { id: 1, text: "atlântico", correct: false },
      { id: 2, text: "Ìndico", correct:false },
      { id: 3, text: "Pacìfico", correct: true },
      { id: 4, text: "Àrtico", correct: false },
    ],
  },
  {
    question: "Qual é o maior deserto do mundo?",
    answers: [
      { id: 1, text: "Kalahari", correct: false },
      { id: 2, text: "Gobi", correct: false },
      { id: 3, text: "Saara", correct: true },
      { id: 4, text: "Antartica", correct: false },
    ],
  },
  {
    question: "Qual é o menor continente do mundo?",
    answers: [
      { id: 1, text: "Asia", correct: false },
      { id: 2, text: "Oceania", correct: true },
      { id: 3, text: "América", correct: false },
      { id: 4, text: "África", correct: false },
    ],
  },
  {
    question: "Qual é o menor país do mundo mundo?",
    answers: [
      { id: 1, text: "Vaticano", correct: true },
      { id: 2, text: "Butão", correct: false },
      { id: 3, text: "Nepal", correct: false },
      { id: 4, text: "Shri Lanka", correct: false },
    ],
  },
{
    question: "Quantos dias tem o mês de fevereiro em um ano bissexto?",
    answers: [
      { id: 1, text: "28", correct: false },
      { id: 2, text: "29", correct: true },
      { id: 3, text: "30", correct: false },
      { id: 4, text: "31", correct: false },
    ],
  },
  {
    question: "Qual é a capital do Brasil?",
    answers: [
      { id: 1, text: "São Paulo ", correct: false },
      { id: 2, text: "Rio de janeiro ", correct: false },
      { id: 3, text: "Brasília ", correct: true},
      { id: 4, text: "Salvador", correct: false },
    ],
  },
  {
    question: "Em que continente fica a França?",
    answers: [
      { id: 1, text: "América", correct: false },
      { id: 2, text: "África", correct: false },
      { id: 3, text: "Europa", correct: true },
      { id: 4, text: "Ásia", correct: false },
    ],
  },
  {
    question: "Qual é o satelite natural da  Terra?",
    answers: [
      { id: 1, text: "Vênus", correct: false },
      { id: 2, text: "Lua", correct:true},
      { id: 3, text: "Marte", correct: false},
      { id: 4, text: "Estrela Polar", correct: false },
    ],
  },
  {
    question: "Em qual continente está localizado o Egito?",
    answers: [
      { id: 1, text: "América", correct: false },
      { id: 2, text: "África", correct: true },
      { id: 3, text: "Europa", correct: false },
      { id: 4, text: "Ásia", correct: false },
    ],
  },
  {
    question: "Qual animal produz leite para alimentar seus filhotes?",
    answers: [
      { id: 1, text: "réptil", correct: false },
      { id: 2, text: "ave", correct: false },
      { id: 3, text: "mamífero", correct: true },
      { id: 4, text: "anfíbio", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    button.dataset.id = answer.id;

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  answers = questions[currentQuestionIndex].answers;
  const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
