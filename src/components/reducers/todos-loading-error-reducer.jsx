// export const initialLoadingErrorTodosState = {
// 	loading: true,
// 	error: '',
// };

// export const todosLoadingErrorReducer = (
// 	state = initialLoadingErrorTodosState,
// 	action,
// ) => {
// 	switch (action.type) {
// 		case 'LOADING_TODOS':
// 			return {
// 				//...state,
// 				loading: action.payload,
// 			};
// 		case 'ERROR_TODOS':
// 			return {
// 				//...state,
// 				error: action.payload,
// 			};
// 		default:
// 			state;
// 	}
// };

export const initialLoadingErrorTodosState = {
	loading: true,
	error: '',
};

export const todosLoadingErrorReducer = (
	state = initialLoadingErrorTodosState,
	action,
) => {
	switch (action.type) {
		case 'LOADING_TODOS':
			return {
				...state,
				loading: action.payload,
			};
		case 'ERROR_TODOS':
			return {
				//...state,
				error: action.payload,
			};

		default:
			return state;
	}
};
