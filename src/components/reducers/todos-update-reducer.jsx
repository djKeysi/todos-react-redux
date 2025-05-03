// export const initialUpdateTodosState = {
// 	todo: '',
// 	addTodoArray: [],
// };

export const initialUpdateTodosState = {
	isEditing: false,
	textTodo: '',
	idTodo: '',
};

export const updateTodosReducer = (state = initialUpdateTodosState, action) => {
	switch (action.type) {
		// case 'SET_TODO':
		// 	return { ...state, todo: action.payload };
		// case 'ADD_TODO':
		// 	return [...state, action.addTodoArray.payload];

		// // 	case "DELETE_TODO":
		// //     return [...state.filter((todo) => todo.id !== action.payload.id)];
		case 'SET_IS_EDITING': {
			return {
				// ...state,
				isEditing: action.payload,
			};
		}
		case 'SET_TEXT_TODO': {
			return {
				...state,
				textTodo: action.payload,
			};
		}
		case 'SET_ID_TODO': {
			return {
				...state,
				idTodo: action.payload,
			};
		}

		default:
			return state;
	}
};
