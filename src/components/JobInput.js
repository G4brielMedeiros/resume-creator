export default function JobInput({ job, setJob, deleteJob }) {
  function handleChange(event) {
    setJob({ ...job, [event.target.name]: event.target.value });
  }

  return (
    <div className="job">
      <button onClick={deleteJob} className="delete-button">
        ✖
      </button>

      <input
        name="company"
        type="text"
        placeholder="Company"
        value={job.company}
        onChange={handleChange}
      />
      <input
        name="position"
        type="text"
        placeholder="Position"
        value={job.position}
        onChange={handleChange}
      />
      <div className="job-dates">
        <input
          id="startDate"
          name="startDate"
          type="date"
          value={job.startDate}
          onChange={handleChange}
        />
        <label htmlFor="finishDate">to</label>
        <input
          id="finishDate"
          name="finishDate"
          type="date"
          value={job.finishDate}
          onChange={handleChange}
        />
      </div>

      <textarea
        id="job-description"
        name="description"
        type="textArea"
        placeholder="Short description"
        value={job.description}
        onChange={handleChange}
      />
    </div>
  );
}
