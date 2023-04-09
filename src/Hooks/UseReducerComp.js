import React, { useReducer } from "react";

const INCREMENT = "INCREMEMT";
const DECREMENT = "DECREMENT";

const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				count: state.count + 1,
			};
		case DECREMENT:
			return {
				count: state.count - 1,
			};
		default:
			return state;
	}
};

const decrementCount = () => {
	return {
		type: DECREMENT,
	};
};

const incrementCount = () => {
	return {
		type: INCREMENT,
	};
};

const UseReducerComp = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<div>
			<h1>Counter with useReducer</h1>
			<h2>Count: {state.count}</h2>
			<button onClick={() => dispatch(decrementCount())}> - </button>
			<button onClick={() => dispatch(incrementCount())}> + </button>
		</div>
	);
};

export default UseReducerComp;
