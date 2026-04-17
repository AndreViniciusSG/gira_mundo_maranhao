const questions = [
  {
    question: "O principal objetivo das politicas públicas no maranhão é:",
    answers: [
      { id: 1, text: "Aumentar impostos ", correct: false },
      { id: 2, text: "reduzir desigualdades sociais", correct:true },
      { id: 3, text: "diminuir a população", correct: false },
      { id: 4, text: "Aumentar expotações", correct: false }
    ],
  },
  {
    question: "Uma das áreas de atuação para reduzir desigualdades é:",
    answers: [
      { id: 1, text: "turismo internacional", correct: false },
      { id: 2, text: "Defesa militar", correct: false },
      { id: 3, text: "Educação", correct: true },
      { id: 4, text: "esportes olímpicos", correct: false },
    ],
  },
  {
    question: "A redução da extrema pobreza indica:",
    answers: [
      { id: 1, text: "Piora da economia", correct: false },
      { id: 2, text: "Aumento da desigualdade", correct: false },
      { id: 3, text: "crescimento da violência", correct: false },
      { id: 4, text: "melhoria das conições de vida ", correct: true },
    ],
  },
  {
    question: "O Aumento da renda familiar contribui para:",
    answers: [
      { id: 1, text: "Mais desigualdade", correct: false },
      { id: 2, text: "Menos empregos", correct: false },
      { id: 3, text: "redução da pobreza", correct:true },
      { id: 4, text: "Queda da educação", correct: false },
    ],
  },
  {
    question: "A educação é importante porque:",
    answers: [
      { id: 1, text: "Aumenta desigualdade", correct: false },
      { id: 2, text: "reduz oportunidades", correct: false },
      { id: 3, text: "Aumenta pobreza", correct: false },
      { id: 4, text: "Ajuda no desevolvimento social", correct: true },
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
