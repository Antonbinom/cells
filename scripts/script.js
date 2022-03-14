'use-strict';

const blocksWrapper = document.querySelector('.square-body');
let blocksCollection = document.querySelectorAll('.block');
let blocks = Array.from(document.querySelectorAll('.block'));

const moveUp = (elem, pos) => {
	let index = blocks.indexOf(elem) + pos;

	if (index >= 0) {
		blocks[index].before(elem);
		blocks = Array.from(document.querySelectorAll('.block'));
		blocks[index + 5].after(blocks[index + 1])
	}
}
const moveDown = (elem, pos) => {
	let index = blocks.indexOf(elem) + pos;

	if (index < blocks.length) {
		blocks[index].after(elem);
		blocks = Array.from(document.querySelectorAll('.block'));
		blocks[index - pos].before(blocks[index - 1]);
	}
}

const moveLeft = (elem, pos) => {
	let index = blocks.indexOf(elem) + pos;
	if (index >= 0) blocks[index].before(elem);
};

const moveRight = (elem, pos) => {
	let index = blocks.indexOf(elem) + pos;
	if (index < blocks.length) blocks[index].after(elem);
};

const resetBlocks = () => {
	blocksWrapper.innerHTML = '';
	blocksCollection.forEach((item) => {
		blocksWrapper.append(item)
	});
};

document.body.addEventListener('click', (e) => {
	if (e.target.closest('.top')) moveUp(e.target.closest('.block'), -5);
	else if (e.target.closest('.bottom')) moveDown(e.target.closest('.block'), 5);
	else if (e.target.closest('.right')) moveRight(e.target.closest('.block'), 1);
	else if (e.target.closest('.left')) moveLeft(e.target.closest('.block'), -1);
	else if (e.target.matches('button')) resetBlocks();
	blocks = Array.from(document.querySelectorAll('.block'));
});