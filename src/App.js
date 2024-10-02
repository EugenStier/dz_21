import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question";
import Result from "./components/Result";
import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className={styles.app}>
      <h1>Анкета</h1>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <button className={styles.submitButton} onClick={handleSubmit}>
        Отправить ответы
      </button>
      <Result />
    </div>
  );
}

export default App;
