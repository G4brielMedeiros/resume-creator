import { nanoid } from "nanoid";
import JobInput from "./JobInput";

export default function ExperienceInput({ experience, setExperience }) {
  function addJob() {
    setExperience((prev) => [
      ...prev,
      {
        id: nanoid(),
        position: "",
        company: "",
        startDate: "",
        finishDate: "",
      },
    ]);
  }

  function updateJob(newJob) {
    setExperience((prev) =>
      prev.map((oldJob) => (oldJob.id === newJob.id ? newJob : oldJob))
    );
  }

  function deleteJob(id) {
    setExperience((prev) => prev.filter((job) => job.id !== id));
  }

  return (
    <section className="experience-section">
      <div className="section-header">
        <h2>Experience</h2>
        <button onClick={addJob} className="add">
          ✚
        </button>
      </div>

      {experience.map((job) => (
        <JobInput
          key={job.id}
          job={job}
          updateJob={updateJob}
          deleteJob={() => deleteJob(job.id)}
        />
      ))}
    </section>
  );
}
