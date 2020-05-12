function StepInput(
	inputId,
	options = {
		inputSelector: "input",
		increaseBtnSelector: ".input-control__button--plus",
		descreaseBtnSelector: ".input-control__button--minus",
	}
) {
	function init(field, options) {
		let fieldElem = document.getElementById(field);
		let input = fieldElem.querySelector(options.inputSelector);
		let increaseBtn = fieldElem.querySelector(options.increaseBtnSelector);
		let decreaseBtn = fieldElem.querySelector(options.descreaseBtnSelector);

		decreaseBtn.addEventListener("click", () => {
			decreaseValue(input);
		});
		increaseBtn.addEventListener("click", () => {
			increaseValue(input);
		});
	}
	const increaseValue = (input) => {
		input.value++;
	};
	const decreaseValue = (input) => {
		input.value--;
	};
    
	init(inputId, options);
}

export default StepInput;
