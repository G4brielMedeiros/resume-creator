import ExperienceInput from "./ExperienceInput";
import PersonalInput from "./PersonalInput";
export default function Input({
  personalInfo,
  setPersonalInfo,
  experience,
  setExperience,
}) {
  return (
    <main className="input-section">
      <PersonalInput personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      <ExperienceInput experience={experience} setExperience={setExperience} />
    </main>
  );
}
