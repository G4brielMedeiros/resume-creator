export default function SchoolOutput({ school }) {
  const shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;

  const gradDate = new Date(school.graduationDate.replace(/-/g, "/").replace(/T.+/, ""));

  let gradDateString;

  if (gradDate instanceof Date && !isNaN(gradDate.valueOf())) {
    gradDateString = shortMonthName(gradDate) + " " + gradDate.getFullYear();
  }

  return (
    <div>
      <h4>{school.degree}</h4>
      <p className="school-graduation-date">
        <strong>{school.name}</strong> {school.graduationDate && "-"} {gradDateString}
      </p>
    </div>
  );
}
