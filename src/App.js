import { nanoid } from "nanoid";
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
  const [experience, setExperience] = useState([
    {
      id: nanoid(),
      company: "",
      position: "",
      startDate: "",
      finishDate: "",
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: nanoid(),
      name: "",
      degree: "",
      graduationDate: "",
    },
  ]);

  return (
    <div className="m-3 flex justify-center gap-10 text-gray-700">
      <main className="h-[800px] w-[650px] overflow-scroll rounded-sm bg-teal-300 p-5">
        <PersonalInput personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        <ExperienceInput experience={experience} setExperience={setExperience} />
        <EducationInput education={education} setEducation={setEducation} />
      </main>
      <Resume personalInfo={personalInfo} experience={experience} education={education} />
    </div>
  );
}

export default App;
