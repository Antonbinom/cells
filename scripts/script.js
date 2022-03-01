'use-strict';

const mainBlock = document.querySelector('.square-body');
const block = document.querySelectorAll('.block');
const number = document.querySelector('.block-number');
let arr = [];

mainBlock.addEventListener('click', (e) => {
	for (let i = 0; i < block.length; i++) {
		arr.push(block[i]);
		// 	block[i].addEventListener('click', (e) => {
		// 		console.log(arr.indexOf(e.target));
		// 	});
		// console.log(i);
	}
	// console.log(arr.indexOf(e.target.closest('.block')));
	// console.log(block.length);
	let elemIndex = arr.indexOf(e.target.closest('.block'));
	elemIndex += 1;
	console.log(elemIndex);
	const thisBlock = e.target.closest('.block');
	const nextBlock = e.target.closest('.block').nextElementSibling;
	const previousBlock = e.target.closest('.block').previousElementSibling;
	const thisNumber = e.target.closest('.block').querySelector('.block-number');
	if (e.target.closest('.right')) {
		elemIndex += 1;
		console.log(arr);

		// thisNumber.textContent = elemIndex += 1;
		// nextNumber.textContent = thisNumber.textContent - 1;
		// nextBlock.after(thisBlock);
		// console.log(thisBlock);
		// console.log(nextBlock);
		// console.log(thisNumber.textContent);

		// console.log(block.findIndex(i => i == thisBlock));
	} else if (e.target.closest('.left')) {
		previousBlock.before(thisBlock);
	} else if (e.target.closest('.top')) {
		console.log('up');
	} else if (e.target.closest('.bottom')) {
		console.log('down');
	}
});