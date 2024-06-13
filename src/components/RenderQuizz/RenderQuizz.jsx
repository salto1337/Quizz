import styles from "./RenderQuizz.module.css";
import { Button } from "../Button/Button";

export function RenderQuizz({ question, handleButton, index, data }) {
	return (
		<>
			<div className={styles.question}>
				<h3>{question.question}</h3>
			</div>
			<div>
				<Button onClick={() => handleButton(1)}>{question.option1}</Button>
				<Button onClick={() => handleButton(2)}>{question.option2}</Button>
				<Button onClick={() => handleButton(3)}>{question.option3}</Button>
				<Button onClick={() => handleButton(4)}>{question.option4}</Button>
			</div>
			<p className={styles.info}>{`${index + 1} question out of ${
				data.length
			}`}</p>
		</>
	);
}
