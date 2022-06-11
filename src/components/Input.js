import Personal from "./Personal";
export default function Input({ personalInfo, setPersonalInfo }) {
  return (
    <main className="input-section">
      <Personal personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
    </main>
  );
}
