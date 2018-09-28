module.exports = function longestConsecutiveLength(array) {
	if (array.length == 0) return 0;
	if (array.length == 1) return array;

	array.sort((a, b) => a - b);

	const obj = {};
	for (let i = 0, len = array.length; i < len; i++) {
	    let str = array[i];
	    obj[str] = true; 
	}
	array = Object.keys(obj);

	const sequences = []; 
	let position = 0;

	for (let i = 0, len = array.length; i < len; i++) {
		if (array[i + 1] - array[i] != 1) {
			let newSequence = (i + 1) - position;
			sequences.push(newSequence);
			position = i + 1;
		}
	}

	return Math.max.apply(null, sequences);
}