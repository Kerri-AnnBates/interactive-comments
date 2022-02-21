import "./styles/sass/app.scss";
import Home from './pages/Home';
import { useState } from "react";
import CommentsContext from "./contexts/CommentsContext";

function App() {
  const commentsData = useState(null);

  return (
    <CommentsContext.Provider value={commentsData}>
      <div className="App">
        <Home />
      </div>
    </CommentsContext.Provider>
  );
}

export default App;
