import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import "./student.css"

const UsersPage = () => {
  const [questions, setQuestions] = useState([]);
  const [marks, setMarks] = useState({});
  const [totalMarks, setTotalMarks] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Fetching documents from the 'Questions' collection
        const querySnapshot = await getDocs(collection(db, "Questions"));

        // Mapping the questions and storing them in state
        const questionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setQuestions(questionsData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    // Call the fetchQuestions function when the component mounts
    fetchQuestions();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  // Function to handle radio button selection
    const handleAnswerSelection = (questionId, selectedAnswer) => {
      const correctAnswer = questions.find((question) => question.id === questionId)?.correctAnswer;

    if (correctAnswer === selectedAnswer) {
      // If the selected answer is correct, give 10 marks
      setMarks((prevMarks) => ({ ...prevMarks, [questionId]: 10 }));
    } else {
      // If the selected answer is wrong, give 0 marks
      setMarks((prevMarks) => ({ ...prevMarks, [questionId]: 0 }));
    }
  };

  // Function to calculate total marks
  const calculateTotalMarks = () => {
    const total = Object.values(marks).reduce((acc, mark) => acc + mark, 0);
    setTotalMarks(total);
  };

  return (
    <div className="que">
      {questions.map((question) => (
        <div key={question.id}>
          <h2 className="question">{question.question}</h2>
          <form id="studentForm">
            {question.answers &&
              question.answers.map((answer, index) => (
                <div key={index} className="answerSheet">
                  <input
                    type="radio"
                    id={`answer-${index}`}
                    className="answer"
                    name={`question-${question.id}`}
                    onChange={() => handleAnswerSelection(question.id, answer)}
                  />
                  <label htmlFor={`answer-${index}`} className="answer">{answer}</label>
                </div>
              ))}
          </form>
          <hr />
        </div>
      ))}

      {/* Submit button to calculate and display total marks */}
      <button onClick={calculateTotalMarks}>Submit</button>

      {/* Display total marks */}
      {totalMarks !== null && (
        <div>
          <h3 style={{color:"white"}}>Total Marks: {totalMarks}</h3>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
