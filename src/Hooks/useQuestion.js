import { useEffect, useState } from "react";
import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
} from "firebase/database";
const useQuestion = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchQuestions() {
      // * database related work
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(
        quizRef,
        orderByKey()
      );
      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
            setQuestions((previousQuestions) => {
            return [...previousQuestions, ...Object.values(snapshot.val())];
          });
          /* empty */
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchQuestions();
  }, [videoID]);
  return {
    loading,
    error,
    questions,
  };
};

export default useQuestion;
