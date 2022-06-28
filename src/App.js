import { useState } from "react";
import "./App.css";
import ExperienceInput from "./components/ExperienceInput";
import PersonalInput from "./components/PersonalInput";
import Resume from "./components/Resume";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    city: "",
    email: "",
    phoneNumber: "",
    description: "",
  });
  const [experience, setExperience] = useState([]);

  return (
    <div className="App">
      <main className="input-section">
        <PersonalInput personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        <ExperienceInput experience={experience} setExperience={setExperience} />
      </main>
      <Resume personalInfo={personalInfo} experience={experience} />
    </div>
  );
}

export default App;
