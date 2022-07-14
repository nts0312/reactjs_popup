import { useState } from "react";
import "./App.css";

function App() {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };

  const closePopup = () => {
    setPop(false);
  };

  return (
    <div className="App">
      <button onClick={handleClickOpen}>Open Popup</button>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <h1>popup</h1>
                <h1 onClick={closePopup}>❌</h1>
              </div>
              <div>
                <p>This is popup</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
