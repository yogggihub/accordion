import { useState } from "react";
import data from "./data";
import Questions from "./Questions";
const App = () => {
  const [questationsData, setquestationsData] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggle = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <main>
      <Questions
        questationsData={questationsData}
        activeId={activeId}
        toggle={toggle}
      />
    </main>
  );
};
export default App;
