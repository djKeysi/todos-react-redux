import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { deleteTodos, readTodos, addTodos, updateTodos } from '../../components';

export const Todos = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todosReadState);
	let todo = useSelector((state) => state.todosAddState.todo);

	const isEditing = useSelector((state) => state.todosUpdateState.isEditing);
	const textTodo = useSelector((state) => state.todosUpdateState.textTodo);
	const idTodos = useSelector((state) => state.todosUpdateState.idTodo);
	const isLoading = useSelector((state) => state.todosLoadingErrorState.isLoading);

	const error = useSelector((state) => state.todosLoadingErrorState.error);

	useEffect(() => {
		dispatch(readTodos);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodos({ title: todo, completed: false }));
		dispatch({ type: 'SET_TODO', payload: ' ' });
	};

	const handleCancel = () => {
		dispatch({ type: 'SET_IS_EDITING', payload: false });
	};

	const handleSave = () => {
		dispatch(updateTodos(idTodos, { title: textTodo }));
		dispatch({ type: 'SET_IS_EDITING', payload: false });
	};

	const updatingTodo = (id, title) => {
		dispatch({ type: 'SET_IS_EDITING', payload: true });
		dispatch({ type: 'SET_TEXT_TODO', payload: title });
		dispatch({ type: 'SET_ID_TODO', payload: id });
	};

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h2>{error}</h2>;
	}
	return (
		<>
			{' '}
			<div>
				<h1>Создание дела</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={todo}
						placeholder="Введите дело..."
						onChange={(e) =>
							dispatch({ type: 'SET_TODO', payload: e.target.value })
						}
						name="title"
					/>
					<button>Создать</button>
				</form>
			</div>
			{isEditing && (
				<form onSubmit={handleSave}>
					<input
						value={textTodo}
						onChange={(e) =>
							dispatch({ type: 'SET_TEXT_TODO', payload: e.target.value })
						}
					/>
					<button type="submit">Сoхранить</button>
					<button onClick={handleCancel}>Отменить</button>
				</form>
			)}
			<div>
				<ul>
					{todos.map((todo) => (
						<li key={todo.id}>
							{todo.title}
							<button onClick={() => dispatch(deleteTodos(todo.id))}>
								Удалить
							</button>
							<button onClick={() => updatingTodo(todo.id, todo.title)}>
								Изменить
							</button>{' '}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
