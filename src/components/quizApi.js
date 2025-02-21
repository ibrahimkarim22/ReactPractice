import { useEffect, useState } from "react";

const QuizApi = () => {
  const [q, setQ] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FETCH_QUESTION();

}, []);


  const API = "https://opentdb.com/api.php?amount=1&type=multiple";
  const FETCH_QUESTION = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setQ(data.results);
      console.log(q);
    } catch (err) {
      console.error("error fetching", err);
    } finally {
      setLoading(false);
    }
  };


  const NEXT = () => {
    FETCH_QUESTION();
  }

  return (
    <>
      <h1>Random Question</h1>
      <button onClick={NEXT}>next question</button>
      {loading ? (
        <p>loading</p>
      ) : q?.length > 0 ? (
        <div>
          <p>QUESTION: {q[0]?.question}</p>

          <ol>
            {[...q[0].incorrect_answers, q[0].correct_answer]
              .sort(() => Math.random() - 0.5)
              .map((item, index) => {
                <li key={index}>{item}</li>;
              })}
          </ol>
        </div>
      ) : (
        <p>no questions availabe</p>
      )}
    </>
  );
};

export default QuizApi;
