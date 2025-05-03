export const deleteTodos = (id) => async (dispatch) => {
	dispatch({ type: 'LOADING_TODOS', payload: true });
	try {
		fetch(`http://localhost:3001/todos/${id}`, {
			method: 'DELETE',
		});

		dispatch({ type: 'DELETE_TODO', payload: id });
		dispatch({ type: 'LOADING_TODOS', payload: false });
	} catch (error) {
		dispatch({ type: 'ERROR_TODOS', payload: error.message });
	}
};
