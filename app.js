const $board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7']

for (let i = 1; i < SQUARES_NUMBER; i++) {
	const $square = document.createElement('div')
	$square.classList.add('square')

	$square.addEventListener('mouseover', () => setColor($square))
	$square.addEventListener('mouseleave', () => removeColor($square))

	$board.append($square)
}

function setColor(element) {
	element.style.backgroundColor = randomColor()
	element.style.boxShadow = `0 0 2px ${randomColor()}, 0 0 25px ${randomColor()}`
}
function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = '0 0 2px #000'
}

function randomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}
