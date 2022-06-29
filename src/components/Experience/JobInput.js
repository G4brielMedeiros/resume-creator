export default function JobInput({ job, updateJob, deleteJob }) {
  function handleChange(event) {
    updateJob({ ...job, [event.target.name]: event.target.value });
  }

  return (
    <div className="relative m-2 mb-5 grid grid-cols-2 grid-rows-[auto_auto_1fr] gap-2">
      <button onClick={deleteJob} className="absolute -left-6 top-2">
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
      <div className="flex items-baseline justify-between">
        <input
          id="startDate"
          name="startDate"
          type="date"
          value={job.startDate}
          onChange={handleChange}
        />
        to
        <input
          id="finishDate"
          name="finishDate"
          type="date"
          value={job.finishDate}
          onChange={handleChange}
        />
      </div>

      <textarea
        className="col-start-2 row-start-1 row-end-4"
        name="description"
        type="textArea"
        placeholder="Short description"
        value={job.description}
        onChange={handleChange}
      />
    </div>
  );
}
