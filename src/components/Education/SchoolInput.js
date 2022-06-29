export default function SchoolInput({ school, updateSchool, deleteSchool }) {
  function handleChange(event) {
    updateSchool({ ...school, [event.target.name]: event.target.value });
  }

  return (
    <div className="relative m-2 mb-5 grid grid-cols-[5fr_5fr_3fr] gap-2">
      <button onClick={deleteSchool} className="absolute -left-6 self-center">
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
