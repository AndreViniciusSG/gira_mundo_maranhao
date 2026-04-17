const questions = [
  {
    question: "Como a geografia do Maranhão afeta a educação?",
    answers: [
      { id: 1, text: "Não afeta", correct: false },
      { id: 2, text: "Melhora internet", correct:false },
      { id: 3, text: "Facilita transporte", correct: false },
      { id: 4, text: "Reduz qualificação da população", correct: true },
    ],
  },
  {
    question: "Por que a familia é importante na educação?",
    answers: [
      { id: 1, text: "Não é", correct: false },
      { id: 2, text: "Diminui o aprendizado", correct: false },
      { id: 3, text: "Ajuda no desempenho e permanência", correct: true },
      { id: 4, text: "Substitui escola", correct: false },
    ],
  },
  {
    question: "Se a ODS4 for alcançada, o que muda?",
    answers: [
      { id: 1, text: "Redução das desigualdades", correct: true },
      { id: 2, text: "Nada ", correct: false},
      { id: 3, text: "Só Melhora escolar", correct: false },
      { id: 4, text: "Só mais escolas", correct: false },
    ],
  },
  {
    question: "Qual o impacto do abandono escolar?",
    answers: [
      { id: 1, text: "Nenhum", correct: false },
      { id: 2, text: "Reduz qualificação da população", correct: true },
      { id: 3, text: "Aumenta empregos", correct: false },
      { id: 4, text: "Melhora economica", correct: false },
    ],
  },
{
    question: "Como o ensino contextualizado ajuda?",
    answers: [
      { id: 1, text: "Não ajuda", correct: false },
      { id: 2, text: "Liga conteúdo à realidade do aluno", correct: true },
      { id: 3, text: "dificulta ensino", correct: false },
      { id: 4, text: "substitui professores", correct: false },
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
