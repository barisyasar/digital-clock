// Time Zone Selector
import useTimeStore from "../../store/useTimeStore";

function TimezoneSelector() {
  const { timeZone, setTimezone } = useTimeStore();

  return (
    <div className="flex ai-center">
      <label htmlFor="timeZone">Time Zone</label>
      <select
        id="timeZone"
        value={timeZone}
        onChange={(e) => setTimezone(e.target.value)}
      >
        <option value="Asia/Istanbul">Asia/Istanbul</option>
        <option value="UTC">UTC</option>
        <option value="Europe/London">Europe/London</option>
        <option value="America/New_York">America/New York</option>
        <option value="Asia/Tokyo">Asia/Tokyo</option>
        <option value="Australia/Sydney">Australia/Sydney</option>
      </select>
    </div>
  );
}

export default TimezoneSelector;
