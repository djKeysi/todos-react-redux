export const initialAddTodosState = {
	todo: '',
	//addTodoArray: [],
};

export const addTodosReducer = (state = initialAddTodosState, action) => {
	switch (action.type) {
		case 'SET_TODO':
			return { ...state, todo: action.payload };
		// case 'ADD_TODO':
		// 	return [...state, action.payload];

		default:
			return state;
	}
};
