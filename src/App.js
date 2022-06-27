import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
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
      <Input
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        experience={experience}
        setExperience={setExperience}
      />
      <Resume personalInfo={personalInfo} />
    </div>
  );
}

export default App;
