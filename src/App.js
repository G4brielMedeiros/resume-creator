import { useState } from "react";
import "./App.css";
import EducationInput from "./components/Education/EducationInput";
import ExperienceInput from "./components/Experience/ExperienceInput";
import PersonalInput from "./components/personal/PersonalInput";
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

  const [education, setEducation] = useState([]);

  return (
    <div className="App">
      <main className="input-section">
        <PersonalInput personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        <ExperienceInput experience={experience} setExperience={setExperience} />
        <EducationInput education={education} setEducation={setEducation} />
      </main>
      <Resume personalInfo={personalInfo} experience={experience} education={education} />
    </div>
  );
}

export default App;
