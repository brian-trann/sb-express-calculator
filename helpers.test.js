const { sortValidInput, handleInput, calcMean, calcMode, calcMedian } = require('./helpers');

describe('sortValidInput tests', () => {
	let nums0, nums1, nums2, nums3, nums4, nums5;

	beforeEach(() => {
		nums0 = [ 1, 2, 3, 4, 5 ];
		nums1 = [ 5, 4, 3, 2, 1 ];
		nums2 = [ 1, 2, 5, 3, 4, 0, 8, 99, 1, 5, -99 ];
		nums3 = [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
		nums4 = [ 0, 0, 0 ];
		nums5 = [ -9, -99, -999 ];
	});

	test('sorting numbers of the same value should be match original array', () => {
		const sorted3 = sortValidInput(nums3);
		const sorted4 = sortValidInput(nums4);

		expect(sorted3).toMatchObject([ 1, 1, 1, 1, 1, 1, 1, 1, 1 ]);
		expect(sorted4).toMatchObject([ 0, 0, 0 ]);

		expect(sorted3.length).toBe(nums3.length);
		expect(sorted4.length).toBe(nums4.length);
	});

	test('sorting numbers different values should match length of original array, and sort smallest to greatest value', () => {
		const sorted0 = sortValidInput(nums0);
		const sorted1 = sortValidInput(nums1);

		expect(sorted0).toMatchObject([ 1, 2, 3, 4, 5 ]);
		expect(sorted1).toMatchObject([ 1, 2, 3, 4, 5 ]);
	});
	test('sorting numbers with negative values should still be ordered properly', () => {
		const sorted2 = sortValidInput(nums2);
		const sorted5 = sortValidInput(nums5);
		expect(sorted2).toMatchObject([ -99, 0, 1, 1, 2, 3, 4, 5, 5, 8, 99 ]);
		expect(sorted5).toMatchObject([ -999, -99, -9 ]);
	});
});

describe('handleInput tests', () => {
	let emptyStr, charString, num, nums;
	beforeEach(() => {
		emptyStr = '';
		charString = 'a,1,b,2';
		num = '11';
		nums = '1,2,3,4,5,6,7,8,9,9,9,9,9,-9';
	});

	test('splitting a string of numbers into an array', () => {
		const numRes = handleInput(num);
		const numsRes = handleInput(nums);
		expect(numRes).toBeInstanceOf(Array);
		expect(numsRes).toBeInstanceOf(Array);
	});

	test('splitting an empty string ', () => {
		const emptyStrRes = handleInput(emptyStr);
		expect(emptyStrRes).toBe(false);
	});

	test('splitting a string of characters and numbers into an array ', () => {
		const charStringRes = handleInput(charString);
		expect(charStringRes).toBe(false);
	});

	test('all values in the valid array are integers', () => {
		const numRes = handleInput(num);
		const numsRes = handleInput(nums);

		numRes.forEach((val) => expect(Number.isInteger(val)).toBe(true));
		numsRes.forEach((val) => expect(Number.isInteger(val)).toBe(true));
	});
});

describe('calcMean tests', () => {
	let nums0, nums1, nums2, nums3, nums4, nums5, nums6;

	beforeEach(() => {
		nums0 = [ 1, 2, 3, 4, 5 ];
		nums1 = [ 5, 4, 3, 2, 1 ];
		nums2 = [ 1, 2, 5, 3, 4, 0, 8, 99, 1, 5, -99 ];
		nums3 = [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
		nums4 = [ 0, 0, 0 ];
		nums5 = [ -99, -99, -99 ];
		nums6 = [ 1.5, 2.5, 3.5, 4.5, 5.5 ];
	});
	test('calculated mean should output a finite number', () => {
		const mean0 = calcMean(nums0);
		const mean1 = calcMean(nums1);
		const mean2 = calcMean(nums2);
		const mean3 = calcMean(nums3);
		const mean4 = calcMean(nums4);
		const mean5 = calcMean(nums5);
		const mean6 = calcMean(nums6);
		expect(Number.isFinite(mean0)).toBe(true);
		expect(Number.isFinite(mean1)).toBe(true);
		expect(Number.isFinite(mean2)).toBe(true);
		expect(Number.isFinite(mean3)).toBe(true);
		expect(Number.isFinite(mean4)).toBe(true);
		expect(Number.isFinite(mean5)).toBe(true);
		expect(Number.isFinite(mean6)).toBe(true);
	});

	test('calculated mean should calculate average for values', () => {
		const mean0 = calcMean(nums0);
		const mean1 = calcMean(nums1);
		const mean3 = calcMean(nums3);
		const mean4 = calcMean(nums4);
		expect(mean0).toBe(3);
		expect(mean1).toBe(3);
		expect(mean3).toBe(1);
		expect(mean4).toBe(0);
	});
	test('calculated mean should calculate average for negative values', () => {
		const mean5 = calcMean(nums5);
		expect(mean5).toBe(-99);
	});
	test('calculated mean should calc average for float values', () => {
		const mean6 = calcMean(nums6);
		expect(mean6).toBe(3.5);
	});
});

describe('calcMode tests', () => {
	let nums0, nums1, nums2, nums3, nums4;

	beforeEach(() => {
		nums0 = [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
		nums1 = [ 0, 0, 0 ];
		nums2 = [ 1 ];
		nums3 = [ 1, 1, 2, 3, 4, 555, 555, 555, 1 ];
		nums4 = [ -1, -1, 0 ];
	});
	test('', () => {
		const mode0 = calcMode(nums0);
		const mode1 = calcMode(nums1);
		const mode2 = calcMode(nums2);
		const mode3 = calcMode(nums3);
		const mode4 = calcMode(nums4);

		expect(Number.isFinite(mode0)).toBe(true);
		expect(Number.isFinite(mode1)).toBe(true);
		expect(Number.isFinite(mode2)).toBe(true);
		expect(Number.isFinite(mode3)).toBe(true);
		expect(Number.isFinite(mode4)).toBe(true);
	});
	test('calc Mode to return the correct, most occurring number', () => {
		const mode0 = calcMode(nums0);
		const mode1 = calcMode(nums1);
		const mode2 = calcMode(nums2);
		const mode3 = calcMode(nums3);
		const mode4 = calcMode(nums4);

		expect(mode0).toBe(1);
		expect(mode1).toBe(0);
		expect(mode2).toBe(1);
		expect(mode3).toBe(555);
		expect(mode4).toBe(-1);
	});
	test('calculated mode, should be in the original array', () => {
		const mode0 = calcMode(nums0);
		const mode1 = calcMode(nums1);
		const mode2 = calcMode(nums2);
		const mode3 = calcMode(nums3);
		const mode4 = calcMode(nums4);

		expect(nums0).toContain(mode0);
		expect(nums1).toContain(mode1);
		expect(nums2).toContain(mode2);
		expect(nums3).toContain(mode3);
		expect(nums4).toContain(mode4);
	});
});

describe('calcMedian tests, given a sorted array', () => {
	let nums0, nums1, nums2, nums3, nums4;

	beforeEach(() => {
		nums0 = [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
		nums1 = [ 0, 0, 0 ];
		nums2 = [ 1 ];
		nums3 = [ 1, 1, 2, 3, 4, 5 ];
		nums4 = [ -5, -1, 0, 1 ];
	});
	test('calcMedian should return the value separating the higher half from the lower half, given odd and even lengths', () => {
		const median0 = calcMedian(nums0);
		const median1 = calcMedian(nums1);
		const median2 = calcMedian(nums2);

		expect(median0).toBe(1);
		expect(median1).toBe(0);
		expect(median2).toBe(1);
	});
	test('calcMedian should return a finite number', () => {
		const median0 = calcMedian(nums0);
		const median1 = calcMedian(nums1);
		const median2 = calcMedian(nums2);
		const median3 = calcMedian(nums3);
		const median4 = calcMedian(nums4);
		expect(Number.isFinite(median0)).toBe(true);
		expect(Number.isFinite(median1)).toBe(true);
		expect(Number.isFinite(median2)).toBe(true);
		expect(Number.isFinite(median3)).toBe(true);
		expect(Number.isFinite(median4)).toBe(true);
	});
	test('calcMedian should calculate the correct median, given an even array length that is even', () => {
		const median3 = calcMedian(nums3);
		const median4 = calcMedian(nums4);
		expect(median3).toBe(2.5);
		expect(median4).toBe(-0.5);
	});
});
