export const linearInterpolate = (min: number, max: number, amt: number): number =>
	min * (1 - amt) + max * amt;

export const lerpArrSegment = (
	min: number,
	max: number,
	minIndex: number,
	maxIndex: number
): number[] => {
	const arrSegment = [];
	const segmentLength = maxIndex - minIndex;
	for (let i = 0; i < segmentLength; i++) {
		const number = Math.floor(linearInterpolate(min, max, i / segmentLength));
		arrSegment.push(number);
	}
	return arrSegment;
};
