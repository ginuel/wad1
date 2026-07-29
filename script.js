let score = 0;

const display = document.quertSelector('#display');
const incrementBtn = document.quertSelector('#increment');
const decrementBtn = document.quertSelector('#decrement');
const resetBtn = document.quertSelector('#reset');

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
