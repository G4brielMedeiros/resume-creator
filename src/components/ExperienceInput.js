import JobInput from "./JobInput";

export default function ExperienceInput({ experience, setExperience }) {
  function addJob() {
    setExperience((prev) => [
      ...prev,
      {
        index: experience.length,
        position: "",
        company: "",
        startDate: "",
        finishDate: "",
      },
    ]);
  }

  function setJob(newJob) {
    setExperience((prev) =>
      prev.map((oldJob) => (oldJob.index === newJob.index ? newJob : oldJob))
    );
  }

  function deleteJob(index) {
    setExperience((prev) => prev.filter((job) => job.index !== index));
  }

  return (
    <section className="experience-section">
      <div className="experience-section-header">
        <h2>Experience</h2>
        <button onClick={addJob} className="add">
          ✚
        </button>
      </div>

      {experience.map((job) => (
        <JobInput
          key={job.index}
          job={job}
          setJob={setJob}
          deleteJob={() => deleteJob(job.index)}
        />
      ))}
    </section>
  );
}
