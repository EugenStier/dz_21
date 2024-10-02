import React from "react";
import { useSelector } from "react-redux";
import styles from "./Result.module.css";

function Result() {
  const result = useSelector((state) => state.questionnaire.result);

  return (
    <div className={styles.result}>
      <h2>Результат:</h2>
      <p>{result}</p>
    </div>
  );
}

export default Result;
