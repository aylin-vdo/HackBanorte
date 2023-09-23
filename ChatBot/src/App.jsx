import { useState, useEffect } from "react";
import "./App.css";
import lens from "./assets/lens.png";
import loadingGif from "./assets/loading.gif";

function App() {
  const [prompt, updatePrompt] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const sendPrompt = async (event) => {
    if (event.key !== "Enter") {
      return;
    } else {
      setLoading(true);
    }
    console.log('prompt', prompt)
  }
  return (
    <div className="app">
      <div className="app-container">
        <div className="spotlight__answer">
            Texto Prueba - Respuesta del chatbot
          </div>
        <div className="spotlight__wrapper">
          <input
            type="text"
            className="spotlight__input"
            placeholder="¿En qué te puedo ayudar?"
            style={{
              backgroundImage: loading ? `url(${loadingGif})` : `url(${lens})`,
            }}
            onChange={(e) => updatePrompt(e.target.value)}
            onKeyDown={(e) => sendPrompt(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;