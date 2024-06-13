import styles from "./Result.module.css";

export function Result({ correctAnswers, handleReset }) {
	return (
		<div>
			<p className={styles.correct}>{`Correct Answers: ${correctAnswers}`}</p>
			<button className={styles.reset} onClick={handleReset}>
				Restart
			</button>
		</div>
	);
}
