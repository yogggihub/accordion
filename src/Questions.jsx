import Question from "./components/Question";
const Questions = ({ questationsData, activeId, toggle }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questationsData.map((question) => (
        <Question
          key={question.id}
          {...question}
          activeId={activeId}
          toggle={toggle}
        />
      ))}
    </section>
  );
};
export default Questions;
