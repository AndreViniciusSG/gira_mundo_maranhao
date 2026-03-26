const questions = [
  {
    question: "Qual é a capital da Mongólia ?",
    answers: [
      { id: 1, text: "Astana", correct: false },
      { id: 2, text: "hanói", correct:false },
      { id: 3, text: "Ulan bator", correct: true },
      { id: 4, text: "katmandu", correct: false },
    ],
  },
  {
    question: "Quem foi o imperador romano assassinado por Brutus?",
    answers: [
      { id: 1, text: "Nero", correct: false },
      { id: 2, text: "júlio César", correct: true },
      { id: 3, text: "Augusto", correct:false },
      { id: 4, text: "Marco Aurélio", correct: false },
    ],
  },
  {
    question: "Que filósofo escreveu A república ?",
    answers: [
      { id: 1, text: "aristóteles", correct: false },
      { id: 2, text: "Sócrates ", correct: false},
      { id: 3, text: "platão", correct: true },
      { id: 4, text: "Descartes", correct: false },
    ],
  },
  {
    question: "qual é  nome do fenômeno que faz a luz se desviar ao passar de um meio para outro",
    answers: [
      { id: 1, text: "Reflexão ", correct: false},
      { id: 2, text: "refração", correct: true },
      { id: 3, text: "Difração", correct: false },
      { id: 4, text: "Disperção", correct: false },
    ],
  },
{
    question: "Em que ano ocorre a Revolução francesa?",
    answers: [
      { id: 1, text: "1776", correct: false },
      { id: 2, text: "1789", correct: true },
      { id: 3, text: "1804", correct: false },
      { id: 4, text: "1815", correct: false },
    ],
  },
  {
    question: "Qual é o nome da partícula subatômica com carga negativa? ",
    answers: [
      { id: 1, text: "Próton ", correct: false },
      { id: 2, text: "Nêutron ", correct: false },
      { id: 3, text: "Elétron", correct: true},
      { id: 4, text: "Pósitron", correct: false },
    ],
  },
  {
    question: "Qal reino biológico inclui fungos como cogumelos e leveduras?",
    answers: [
      { id: 1, text: "Animalia", correct: false },
      { id: 2, text: "plantae", correct: false },
      { id: 3, text: "Fungi", correct: true },
      { id: 4, text: "Prottista", correct: false },
    ],
  },
  {
    question: "Qual físico ganho o Prêmio Nobel por descobrir o efeito fotoelétrico?",
    answers: [
      { id: 1, text: "Isaac Newton", correct: false },
      { id: 2, text: "Albert Einstein", correct:true },
      { id: 3, text: "Marie Curie ", correct: false },
      { id: 4, text: "Nikolas Tesla", correct: false },
    ],
  },
  {
    question: "Quem foi o imperador responsável pela divisão do Império Romano em Oriente e Ocidente?",
    answers: [
      { id: 1, text: "César Augusto", correct: false },
      { id: 2, text: "Nero", correct: false },
      { id: 3, text: "Marco Aurélio", correct: false },
      { id: 4, text: "Diocleciano", correct: true },
    ],
  },
  {
    question: "Em que ano as emissoras de noticias foram de preto e branco para colorida ?",
    answers: [
      { id: 1, text: "1967", correct: true },
      { id: 2, text: "1980", correct: false },
      { id: 3, text: "1975", correct: false },
      { id: 4, text: "1960", correct: false },
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
