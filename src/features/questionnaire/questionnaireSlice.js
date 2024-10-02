import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    { id: 1, text: "Ваш любимый цвет?", options: ["Красный", "Синий"] },
    { id: 2, text: "Ваш любимый сезон?", options: ["Лето", "Зима"] },
  ],
  answers: {},
  result: "",
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    submitAnswers: (state) => {
      // Пример простой логики расчета результата
      if (state.answers[1] === "Красный" && state.answers[2] === "Лето") {
        state.result = "Вы энергичный и любите тепло!";
      } else {
        state.result = "Вы предпочитаете другие вещи.";
      }
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
