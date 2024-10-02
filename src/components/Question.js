import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";
import styles from "./Question.module.css";

function Question({ question }) {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.questionnaire.answers);

  const handleAnswer = (answer) => {
    dispatch(answerQuestion({ questionId: question.id, answer }));
  };
  return (
    <div className={styles.question}>
      <h2>{question.text}</h2>
      {question.options.map((option) => (
        <button
          key={option}
          className={styles.option}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}
      <p>Ваш ответ: {answers[question.id] || "Еще не выбран"}</p>
    </div>
  );
}

export default Question;
