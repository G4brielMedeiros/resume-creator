export default function JobOutput({ job }) {
  const shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;

  const startDate = new Date(job.startDate.replace(/-/g, "/").replace(/T.+/, ""));
  const finishDate = new Date(job.finishDate.replace(/-/g, "/").replace(/T.+/, ""));

  let startDateString;
  let finishDateString;

  if (startDate instanceof Date && !isNaN(startDate.valueOf())) {
    startDateString = shortMonthName(startDate) + " " + startDate.getFullYear();
  }

  if (finishDate instanceof Date && !isNaN(finishDate.valueOf())) {
    finishDateString = shortMonthName(finishDate) + " " + finishDate.getFullYear();
  }

  return (
    <div>
      <h4>
        {job.position} {job.company && <span className="font-normal">at</span>}{" "}
        {job.company}
      </h4>
      <p className="italic">
        {startDateString} {job.finishDate && "to"} {finishDateString}
      </p>

      <p>{job.description}</p>
    </div>
  );
}
