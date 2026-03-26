const questions = [
  {
    question: "Em que ano o homem pisou na lua pela primeira vez?",
    answers: [
      { id: 1, text: "1965", correct: false },
      { id: 2, text: "1972", correct:false },
      { id: 3, text: "1975", correct: false },
      { id: 4, text: "1969", correct: true },
    ],
  },
  {
    question: "Quem escreve o livro Dom Casmurro?",
    answers: [
      { id: 1, text: "josé de Alencar", correct: false },
      { id: 2, text: "Monteiro Lobato", correct: false },
      { id: 3, text: "Machado de Assis", correct: true },
      { id: 4, text: "Graciliano Ramos", correct: false },
    ],
  },
  {
    question: "Qual é o maior país do mundo em território?",
    answers: [
      { id: 1, text: "Canadá", correct: false },
      { id: 2, text: "china", correct: false},
      { id: 3, text: "Rússia", correct: true },
      { id: 4, text: "Estados Unidos", correct: false },
    ],
  },
  {
    question: "Qual é a moeda oficial do Reino unido?",
    answers: [
      { id: 1, text: "Libra esterlina", correct: true },
      { id: 2, text: "Euro", correct: false },
      { id: 3, text: "Nepal", correct: false },
      { id: 4, text: "Shri Lanka", correct: false },
    ],
  },
{
    question: "Qual é o nome do cientista que propôs a teoria da relatividade?",
    answers: [
      { id: 1, text: "Isaac Newton", correct: false },
      { id: 2, text: "Albert Eisntein", correct: true },
      { id: 3, text: "Charles Darwin", correct: false },
      { id: 4, text: "Galileu Galilei", correct: false },
    ],
  },
  {
    question: "Qual é o nome da maior floresta tropical do mundo?",
    answers: [
      { id: 1, text: "Floresta da Tasmânia  ", correct: false },
      { id: 2, text: "Floresta Amazônica ", correct: false },
      { id: 3, text: "Floresta Negra", correct: true},
      { id: 4, text: "Floresta do Congo", correct: false },
    ],
  },
  {
    question: "Quem foi o autor de Pequeno Príncipe?",
    answers: [
      { id: 1, text: "Antoine de Saint-Exupéry", correct:true },
      { id: 2, text: "Lewis Carrol", correct: false },
      { id: 3, text: "Victor Hugo", correct: false },
      { id: 4, text: "Machado de Assis", correct: false },
    ],
  },
  {
    question: "Em que país se originou o futebol moderno?",
    answers: [
      { id: 1, text: "Brasil", correct: false },
      { id: 2, text: "França", correct: false },
      { id: 3, text: "Inglaterra", correct: true },
      { id: 4, text: "Itália", correct: false },
    ],
  },
  {
    question: "Qual é o país conhecido como Terra do sol nascente ?",
    answers: [
      { id: 1, text: "China", correct: false },
      { id: 2, text: "Coreia do Sul", correct: false },
      { id: 3, text: "Tailândia", correct: false },
      { id: 4, text: "Japão", correct: true },
    ],
  },
  {
    question: "Que tipo de rocha é formada por resfriamento do magma?",
    answers: [
      { id: 1, text: "Sedimentar", correct: false },
      { id: 2, text: "Metamórfica", correct: false },
      { id: 3, text: "Ígnea", correct: true },
      { id: 4, text: "Calcária", correct: false },
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
