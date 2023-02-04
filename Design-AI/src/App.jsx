import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setResult(res.data.data[0].url);
  };
  return (
    <div className="app-container">
      <h1 className="app-header">IMAGEN</h1>
      <p className="app-description">
        {" "}
        from Thought, to text then into reality. Bring your Ideas to life with
        IMAGEN the image generator you need to menifest your thoughts to
        reality. with the power of AI type in the Image you want generated and
        let the magic happen
      </p>
      <div className="app-main">
        <input className="app-input" 
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type desired image e.g 'a white siamese cat' "
        />
        <button className="app-button" onClick={generateImage}>
          {" "}
          →{" "}
        </button>
      </div>
      {result.length > 0 ? <img src={result} alt="Result" className="result-img" />: <></>}
    </div>
  );
}

export default App;
