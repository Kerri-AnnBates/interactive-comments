import "./styles/sass/app.scss";
import Home from './pages/Home';
import { useState } from "react";
import CommentsContext from "./contexts/CommentsContext";
import CurrentUserContext from "./contexts/CurrentUserContext";

function App() {
  const commentsData = useState(null);
  const currentUser = useState(null);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CommentsContext.Provider value={commentsData}>
        <div className="App">
          <Home />
        </div>
      </CommentsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
