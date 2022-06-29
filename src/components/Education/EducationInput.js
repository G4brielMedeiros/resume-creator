import { nanoid } from "nanoid";
import SchoolInput from "./SchoolInput";

export default function EducationInput({ education, setEducation }) {
  function addSchool() {
    setEducation((prev) => [
      ...prev,
      {
        id: nanoid(),
        name: "",
        degree: "",
        graduationDate: "",
      },
    ]);
  }

  function updateSchool(newSchool) {
    setEducation((prev) =>
      prev.map((oldSchool) => (oldSchool.id === newSchool.id ? newSchool : oldSchool))
    );
  }

  function deleteSchool(id) {
    setEducation((prev) => prev.filter((school) => school.id !== id));
  }

  return (
    <section>
      <div className="flex items-center gap-1">
        <h2>Education</h2>
        <button onClick={addSchool}>✚</button>
      </div>

      {education.map((school) => (
        <SchoolInput
          key={school.id}
          school={school}
          updateSchool={updateSchool}
          deleteSchool={() => deleteSchool(school.id)}
        />
      ))}
    </section>
  );
}
