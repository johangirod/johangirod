// @ts-nocheck
let questionList = JSON.parse(localStorage.getItem('questions')) ?? [];

document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	const form = Object.entries(formData);

	const question = {
		question: form.question,
		correct: Number.parseInt(form.correct),
		answers: [form.answer1, form.answer2, form.answer3, form.answer4]
	};

	questionList.push(question);

	localStorage.setItem('questions', JSON.stringify(questionList));
});
