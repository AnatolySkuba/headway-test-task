export type Option = { id: string; letter: string; answer: string };

export type Question = {
  id: string;
  question: string;
  options: Option[];
  correct_answers: string[];
  money: number;
};
