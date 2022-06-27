export default function Resume({ personalInfo }) {
  const { firstName, lastName, title, city, phoneNumber, email, description } =
    personalInfo;

  return (
    <article className="resume">
      <header>
        <h1 className="resume-name">
          {firstName} {lastName}
        </h1>
        <h2 className="resume-title">{title}</h2>
      </header>
      <div className="resume-wrapper">
        <div className="resume-relevant-info">
          {description && <h3>Description</h3>}
          <p>{description}</p>
        </div>
        <aside className="resume-personal-info">
          {(city || phoneNumber || email) && <h3>Personal Details</h3>}

          {city && <h4>City</h4>}
          <p>{city}</p>

          {phoneNumber && <h4>Phone Number</h4>}
          <p>{phoneNumber}</p>

          {email && <h4>Email</h4>}
          <p>{email}</p>
        </aside>
      </div>
    </article>
  );
}