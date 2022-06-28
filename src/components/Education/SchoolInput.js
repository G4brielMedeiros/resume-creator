export default function SchoolInput({ school, updateSchool, deleteSchool }) {
  function handleChange(event) {
    updateSchool({ ...school, [event.target.name]: event.target.value });
  }

  return (
    <div className="school-input">
      <button onClick={deleteSchool} className="delete-button">
        ✖
      </button>

      <input
        name="name"
        type="text"
        placeholder="School name"
        value={school.name}
        onChange={handleChange}
      />
      <input
        name="degree"
        type="text"
        placeholder="Degree"
        value={school.degree}
        onChange={handleChange}
      />

      <input
        id="graduationDate"
        name="graduationDate"
        type="date"
        value={school.graduationDate}
        onChange={handleChange}
      />
    </div>
  );
}
