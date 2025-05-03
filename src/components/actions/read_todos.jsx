export const readTodos = async (dispatch) => {
	dispatch({ type: 'LOADING_TODOS', payload: true });
	try {
		const response = await fetch('http://localhost:3001/todos');
		const data = await response.json();
		dispatch({ type: 'READ_TODOS', payload: data });
		dispatch({ type: 'LOADING_TODOS', payload: false });
	} catch (error) {
		dispatch({ type: 'ERROR_TODOS', payload: error.message });
	}
};
