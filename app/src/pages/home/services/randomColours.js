const colours = ['black', 'rose-600'];
let previousColorIndex = -1;

export const generateRandomColours = (setColour) => {
	const getRandomInt = () => {
		let newIndex;
		do {
			newIndex = Math.floor(Math.random() * colours.length);
		} while (newIndex === previousColorIndex); // Ensure the new index is different from the previous one
		previousColorIndex = newIndex; // Update the previous index
		return newIndex;
	};
	return setColour(colours[getRandomInt()]);
};
