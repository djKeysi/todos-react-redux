export const addTodos = (payload1) => async (dispatch) => {
	dispatch({ type: 'LOADING_TODOS', payload: true });
	try {
		const response = await fetch('http://localhost:3001/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload1),
		});
		const data = await response.json();
		dispatch({ type: 'ADD_TODO', payload: data });
		dispatch({ type: 'LOADING_TODOS', payload: false });
	} catch (error) {
		dispatch({ type: 'ERROR_TODOS', payload: error.message });
	}
};
