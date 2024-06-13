import styles from "./App.module.css";

import { useEffect, useState } from "react";
import { data } from "./assets/data";
import { Result } from "./components/Result/Result";
import { RenderQuizz } from "./components/RenderQuizz/RenderQuizz";

function App() {
	const [index, setIndex] = useState(0);
	const [question, setQuestion] = useState(data[index]);
	const [correctAnswers, setCorrectAnswers] = useState(0);

	useEffect(() => {
		setQuestion(data[index]);
	}, [index]);

	function nextQuestion() {
		setIndex((prevIndex) => prevIndex + 1);
	}

	function checkAnswer(answer) {
		if (question.correct === answer) {
			setCorrectAnswers((prevValue) => prevValue + 1);
		}
	}

	function handleButton(answer) {
		nextQuestion();
		checkAnswer(answer);
	}

	function handleReset() {
		setIndex(0);
		setQuestion(data[0]);
		setCorrectAnswers(0);
	}

	return (
		<div className={styles.quizz}>
			<div className={styles.container}>
				<div className={styles.app}>
					<div>
						<h2>Quizz</h2>
					</div>
					{index < data.length ? (
						<RenderQuizz
							question={question}
							handleButton={handleButton}
							index={index}
							data={data}
						/>
					) : (
						<Result correctAnswers={correctAnswers} handleReset={handleReset} />
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
