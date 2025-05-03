export const initialTodosState = [];

export const TodosReducer = (state = initialTodosState, action) => {
	switch (action.type) {
		case 'READ_TODOS':
			return [...action.payload];
		case 'ADD_TODO':
			return [...state, action.payload];

		case 'DELETE_TODO':
			return [...state.filter((todo) => todo.id !== action.payload)];

		case 'UPDATE_TODO': {
			return [
				...state.map((todo) =>
					todo.id === action.payload.id ? { ...todo, ...action.payload } : todo,
				),
			];
		}

		default:
			return [...state];
	}
};
