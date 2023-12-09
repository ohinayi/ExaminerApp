import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase"; 
import "./admin.css";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const navigate =useNavigate();
  
  const setDelete = () => {
      navigate("/deletePage");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Splitting answers into an array
    const answersArray = answers.split(",").map((answer) => answer.trim());

    // Assuming 'Questions' is the name of your collection in Firebase
    const questionData = {
      question,
      answers: answersArray,
      correctAnswer: correctAnswer.trim(),
    };

    try {
      // Adding the question data to the 'Questions' collection
      const docRef = await addDoc(collection(db, "Questions"), questionData);
      console.log("Question added with ID: ", docRef.id);

      // Clearing the form after submission
      setQuestion("");
      setAnswers("");
      setCorrectAnswer("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <label>
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <br />
      <label>
        Answers (comma-separated):
        <input
          type="text"
          value={answers}
          onChange={(e) => setAnswers(e.target.value)}
        />
      </label>
      <br />
      <label>
        Correct Answer:
        <input
          type="text"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
      </label>
      <br />
      <button type="submit" className="sub">Submit</button>
      <button type="" className="delete"
      onClick={setDelete}
      >Delete Questions</button>
    </form>
  );
};


