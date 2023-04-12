function isArrayMatrix(arr) {
	/*
		check if array arr is a matrix i.e all its rows are of the same size
	*/
	if (!arr || !arr.length) {
		return false
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[0].length != arr[i].length) {
			return false
		}
	}

	return true
}

export function matMultiply(a, b) {
	/*
		multiply matrices a,b (matrix multiplication)
	*/
	if (!isArrayMatrix(a) || !isArrayMatrix(b) || a[0].length !== b.length) {
		return null;
	}

	const result = new Array(a.length);

	for (let i = 0; i < a.length; i++) {
		result[i] = new Array(b[0].length).fill(0);

		for (let j = 0; j < b[0].length; j++) {
			for (let k = 0; k < a[0].length; k++) {
				result[i][j] += a[i][k] * b[k][j];
			}
		}
	}

	return result;
}

export function multiply(a, b) {
	/*
		multiply matrices a,b element-wise
	*/
	if (!isArrayMatrix(a) || !isArrayMatrix(b) || a[0].length !== b[0].length || a.length !== b.length) {
		return null;
	}

	const result = new Array(a.length);
	for (let i = 0; i < a.length; i++) {
		result[i] = new Array(a[0].length).fill(0)

		for (let j = 0; j < a[0].length; j++) {
			result[i][j] = a[i][j] * b[i][j]
		}
	}

	return result


}