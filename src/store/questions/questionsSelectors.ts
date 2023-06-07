import { QuestionsState, Score } from "./questionsSlice";

export const getQuestions = (state: { questions: QuestionsState }) =>
  state.questions.questions;
export const getScore = (state: { questions: Score }) => state.questions.score;
