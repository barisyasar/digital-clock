// Clock Mode
import useTimeStore from "../../store/useTimeStore";

function ClockMode() {
  const { hour12, toggleHour12 } = useTimeStore();

  return (
    <div className="flex ai-center">
      <label htmlFor="clockMode">Mode</label>
      <select
        id="clockMode"
        value={hour12 ? "12-hour" : "24-hour"}
        onChange={() => toggleHour12()}
      >
        <option value="24-hour">24 Hour</option>
        <option value="12-hour">12 Hour</option>
      </select>
    </div>
  );
}

export default ClockMode;
