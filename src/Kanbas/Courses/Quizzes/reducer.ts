import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: <any>[],
  quiz: { 
    _id: String,
    name: "New quiz 123", 
    description: "New Description", 
    points: 25,
    numQuestions: 0,
    startDate: "01-10-2024",
    dueDate: "01-12-2024",
    availableUntil: "01-14-2024",
    published: false,
    assignedTo: "Students",
    quizType: "Graded Quiz",
    assignmentGroup: "Quizzes",
    shuffle: true,
    timeLimit: 20,
    multipleAttempts: false,
    showCorrectAnswers: false,
    accessCode: '',
    oneQuestionATime: true,
    webcamRequired: false,
    lockQuestions: false,
    course: "RS101"
   },
};


const quizzesSlice = createSlice({
 name: "quizzes",
 initialState,
 reducers: {
   setQuizzes: (state, action) => {
     state.quizzes = action.payload;
   },


   addQuiz: (state, action) => {
     state.quizzes = [action.payload, ...state.quizzes];
   },
  
   deleteQuiz: (state, action) => {
     state.quizzes = state.quizzes.filter(
       (quiz:any) => quiz._id !== action.payload
     );
   },
   updateQuiz: (state, action) => {
     state.quizzes = state.quizzes.map((quiz:any) => {
       if (quiz._id === action.payload._id) {
         return action.payload;
       } else {
         return quiz;
       }
     });
   },
   setQuiz: (state, action) => {
     state.quiz = action.payload;
   },
 },
});


export const { addQuiz, deleteQuiz,
 updateQuiz, setQuiz, setQuizzes } = quizzesSlice.actions;
export default quizzesSlice.reducer;