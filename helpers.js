/**
 * calcMean takes in an array of numbers and returns the average value of the array
 * @param {number[]} arr 
 * @return {number} mean
 */
const calcMean = (arr) => {
	const sum = arr.reduce((acc, cur) => acc + cur, 0);
	return sum / arr.length;
};

/**
 * calcMedian takes in an array of numbers and returns the midpoint of the sorted array
 * @param {number[]} arr 
 * @return {number} median
 */
const calcMedian = (arr) => {
	const len = arr.length;
	const mid = Math.ceil(len / 2);
	const median = len % 2 === 0 ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid - 1];
	return median;
};

/**
 * calcMode takes in an array of numbers and returns the number that occurs the most amount of times
 * @param {number[]} arr 
 * @return {number} mode
 */
const calcMode = (arr) => {
	const d = {};
	arr.forEach((val) => (d[val] ? d[val]++ : (d[val] = 1)));
	const modeStr = Object.keys(d).reduce((acc, curr) => (d[acc] > d[curr] ? acc : curr));
	const mode = parseInt(modeStr);
	return mode;
};

/**
 * handleInput takes in the raw query string and splits to an array of numbers. 
 * If there is a single invalid input, will return false
 * @param {string} str 
 * @return {number[]|false} 
 */
const handleInput = (str) => {
	const arr = str.split(',').map((num) => parseInt(num));
	const isValid = arr.every((val) => Number.isInteger(val));
	return isValid ? arr : isValid;
};

/**
 * sortValidInput will sort an array of integers
 * @param {number[]} arr
 * @return {number[]} arr
 */
const sortValidInput = (arr) => {
	return arr.sort((a, b) => a - b);
};

module.exports = { sortValidInput, handleInput, calcMean, calcMode, calcMedian };
