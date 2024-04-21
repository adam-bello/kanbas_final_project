import axios from "axios";
axios.defaults.withCredentials = true;
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = '/api/courses';
const QUIZZES_API = '/quizzes';
const QUESTIONS_API = `/api/questions`;


export const findQuestionsForQuiz = async (courseId : any, quizId: any) => {
 const response = await axios
   .get(`${API_BASE}${COURSES_API}/${courseId}${QUIZZES_API}/${quizId}/questions`);
 return response.data;
 };

export const createQuestion = async (courseId : any, quizId : any, question: any) => {
   const response = await axios.post(
    `${API_BASE}${COURSES_API}/${courseId}${QUIZZES_API}/${quizId}/questions`, question);
   return response.data;
};

export const deleteQuestion = async (questionId : any) => {
   const response = await axios
     .delete(`${API_BASE}${QUESTIONS_API}/${questionId}`);
   return response.data;
};

export const findQuestionById = async (questionId : any) => {
  const response = await axios.get(`${API_BASE}${QUESTIONS_API}/${questionId}`);
  return response.data;
}

 export const updateQuestion = async (question : any) => {
   const response = await axios.put(`${API_BASE}${QUESTIONS_API}/${question._id}`, question);
   return response.data;
};
