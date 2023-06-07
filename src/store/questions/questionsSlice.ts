import { createSlice } from "@reduxjs/toolkit";
import { START_SCORE } from "consts";

import { Question } from "types";

export type QuestionsState = {
  questions: Question[];
};

export type Score = {
  score: number;
};

const initialState: Score = {
  score: START_SCORE,
};

export const questionsSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    changeScore(state, action) {
      return { ...state, score: action.payload };
    },
  },
});

export const { changeScore } = questionsSlice.actions;
