let score = 0;

const display = document.querySelector('#display');

const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");

incrementBtn.addEventListener('click', () => {
	score++;
	display.textContent = `Score: ${score}`;
});

decrementBtn.addEventListener('click', () => {
	score--;
	display.textContent = `Score: ${score}`;
});

resetBtn.addEventListener('click', () => {
	score = 0;
	display.textContent = `Score: ${score}`;
});
