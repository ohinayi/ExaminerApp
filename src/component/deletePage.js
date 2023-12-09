import { useEffect, useState } from "react";
import {db} from "../config/firebase";
import {getDocs,collection,deleteDoc,doc} from "firebase/firestore";
import "./delete.css";


const DeletePage = () => {
    const [questionList, setQuestionList] = useState([]);
    const questionListRef = collection(db, "Questions");

    const deleteQuestion = async (id) => {
        const questionDoc = doc(db, "Questions",id);
        await deleteDoc(questionDoc);
    };
    useEffect (()=> {
    const getQuestionList = async () => {
        try{
            const data= await getDocs(questionListRef);
            const filteredQuestion = data.docs.map((doc) => ({...doc.data(),
            id: doc.id,
            }));
            setQuestionList(filteredQuestion);
        }
       catch (err) {
            console.error(err);
       }
    };
    getQuestionList();
},);
    return(
        <div style={{color:"white"}} >
            {questionList.map((question) =>(
                <div key={question.id}>
                    <h1>{question.question}</h1>
                    <p>{question.correctAnswer}</p>
                    <p>{question.answers}</p>
                    <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
};
export default DeletePage;