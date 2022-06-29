export default function PersonalInput({ personalInfo, setPersonalInfo }) {
  function handleChange(event) {
    setPersonalInfo((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  return (
    <section>
      <h2>Personal Information</h2>

      <div className="m-2 grid grid-cols-3 gap-2">
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          value={personalInfo.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          value={personalInfo.lastName}
          onChange={handleChange}
        />
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={personalInfo.title}
          onChange={handleChange}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          value={personalInfo.city}
          onChange={handleChange}
        />
        <input
          name="phoneNumber"
          type="text"
          placeholder="Phone number"
          value={personalInfo.phoneNumber}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={personalInfo.email}
          onChange={handleChange}
        />
        <textarea
          className="col-start-1 col-end-4"
          name="description"
          type="textArea"
          placeholder="Description"
          value={personalInfo.description}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}
