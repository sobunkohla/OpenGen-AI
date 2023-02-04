import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  }); 


  const openai = new OpenAIApi(configuration);

  const generateImage = async() => {
    await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      temperature: 0,
      max_tokens: 7,
    });
  }
  return (
    <div>
      
    </div>
  )
}

export default App
