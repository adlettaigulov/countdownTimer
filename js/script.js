const quizData = [
	{
		question: "Российский мультфильм, удостоенный «Оскара», — это…",
		a: "«Простоквашино»",
		b: "«Винни-Пух»",
		c: "«Старик и море»",
		d: "«Ну, погоди!»",
		correct: "c",
	},
	{
		question: "С какой из этих стран Чехия не граничит?",
		a: "Германия",
		b: "Венгрия",
		c: "Австрия",
		d: "Польша",
		correct: "b",
	},
	{
		question: "Корюшка - это...",
		a: "Птичка",
		b: "Крючок",
		c: "Растение",
		d: "Рыбка",
		correct: "d",
	},
	{
		question: "Маленький мук из сказки был...?",
		a: "Подростком",
		b: "Ребенком",
		c: "Карликом",
		d: "Лиллипутом",
		correct: "c",
	},
	{
		question:
			"В каком городе в 1932 году был проведён первый международный кинофестиваль?",
		a: "Венеция",
		b: "Париж",
		c: "Канн",
		d: "Берлин",
		correct: "a",
	},
];

const questionEl = document.querySelector("#question");
const answerEls = document.querySelectorAll(".answer");
const firstAnswer = document.querySelector("#first_answer");
const secondAnswer = document.querySelector("#second_answer");
const thirdAnswer = document.querySelector("#third_answer");
const fourthAnswer = document.querySelector("#fourth_answer");
const submitBtn = document.querySelector(".quiz-submit");
const scoreResult = document.querySelector(".quiz-container");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
	deselect();
	const currentQuizData = quizData[currentQuiz];
	firstAnswer.innerText = currentQuizData.a;
	secondAnswer.innerText = currentQuizData.b;
	thirdAnswer.innerText = currentQuizData.c;
	fourthAnswer.innerText = currentQuizData.d;
	questionEl.innerText = currentQuizData.question;
}

function getSelected() {
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});
	return answer;
}

function deselect() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener("click", () => {
	const answer = getSelected();
	console.log(answer);
	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
			answer.d;
		}

		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			scoreResult.innerHTML = `<h2>Поздравляем, ${score} из ${quizData.length} правильных ответов!</h2> <button class="quiz-reload" onclick="location.reload()">Перезапустить</button>`;
		}
	}
});
