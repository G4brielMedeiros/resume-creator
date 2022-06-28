export default function JobInput({ job, updateJob, deleteJob }) {
  function handleChange(event) {
    updateJob({ ...job, [event.target.name]: event.target.value });
  }

  return (
    <div className="job-input">
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
      <div className="job-input-dates">
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
        id="job-input-description"
        name="description"
        type="textArea"
        placeholder="Short description"
        value={job.description}
        onChange={handleChange}
      />
    </div>
  );
}