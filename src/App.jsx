//json-server -p 3001 --watch ./db.json

//npm install react-redux redux
//npm i redux-thunk

import './App.css';
import styles from './app.module.css';
import { Todos } from './components/Todos/Todos';

export const App = () => {
	return (
		<div className={styles.parent}>
			<div className={styles.block}>
				<Todos />
			</div>
		</div>
	);
};
