import { nanoid } from "nanoid";
import JobInput from "./JobInput";

export default function ExperienceInput({ experience, setExperience }) {
  function addJob() {
    setExperience((prev) => [
      ...prev,
      {
        id: nanoid(),
        company: "",
        position: "",
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
    <section>
      <div className="flex items-center gap-1">
        <h2>Experience</h2>
        <button onClick={addJob}>✚</button>
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
