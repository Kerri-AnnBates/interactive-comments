import "./styles/sass/app.scss";
import Home from './pages/Home';
import { useState, useEffect } from "react";
import CommentsContext from "./contexts/CommentsContext";
import data from './data/data.json';

function App() {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    console.log(data);
    setCommentsData(data);
  }, []);

  return (
    <CommentsContext.Provider value={commentsData}>
      <div className="App">
        <Home />
      </div>
    </CommentsContext.Provider>
  );
}

export default App;
