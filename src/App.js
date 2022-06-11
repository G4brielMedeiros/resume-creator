import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Resume from "./components/Resume";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});

  return (
    <div className="App">
      <Input personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      <Resume personalInfo={personalInfo} />
    </div>
  );
}

export default App;
