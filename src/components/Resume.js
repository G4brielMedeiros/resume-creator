import SchoolOutput from "./Education/SchoolOutput";
import JobOutput from "./Experience/JobOutput";

export default function Resume({ personalInfo, experience, education }) {
  const { firstName, lastName, title, city, phoneNumber, email, description } =
    personalInfo;

  return (
    <article className="h-[800px] w-[600px] bg-white">
      <header className="flex h-1/6 flex-col justify-center bg-sky-700 pl-5 tracking-wide text-white">
        {(firstName || lastName) && (
          <h1 className="text-5xl font-bold">
            {firstName} {lastName}
          </h1>
        )}
        <h2 className="pl-3 text-base">{title}</h2>
      </header>
      <div className="flex h-5/6">
        <div className="w-2/3">
          {description && <h3>Description</h3>}
          {description && <p>{description}</p>}

          {experience.length !== 0 && <h3>Experience</h3>}
          {experience.map((job) => (
            <JobOutput key={job.id} job={job} />
          ))}

          {education.length !== 0 && <h3>Education</h3>}
          {education.map((school) => (
            <SchoolOutput key={school.id} school={school} />
          ))}
        </div>

        <aside className="h-full w-1/3 bg-slate-200">
          {(city || phoneNumber || email) && <h3>Personal Details</h3>}

          {city && <h4>City</h4>}
          {city && <p>{city}</p>}

          {phoneNumber && <h4>Phone Number</h4>}
          {phoneNumber && <p>{phoneNumber}</p>}

          {email && <h4>Email</h4>}
          {email && <p>{email}</p>}
        </aside>
      </div>
    </article>
  );
}
