// Clock
import useTime from "../../hooks/useTime";
import Digit from "../Digit";
import digitSegments from "../../constants/digitSegments";
import Seprator from "../Seprator";
import Card from "../Card";
import useTimeStore from "../../store/useTimeStore";

function Clock() {
  const { timeZone, hour12 } = useTimeStore();
  const { hours, minutes, seconds, period } = useTime(timeZone, hour12);

  return (
    <div className="clock flex flex-wrap gap-5 flex-wrap jc-center jc-lg-between ai-center">
      <Card className="flex gap-5">
        {period && <div>{period.toLowerCase()}</div>}
        <div className="flex">
          {[...hours].map((digit, index) => (
            <Digit key={`h-${index}`} segments={digitSegments[digit]} />
          ))}
        </div>
      </Card>

      <Seprator />

      <Card className="flex">
        {[...minutes].map((digit, index) => (
          <Digit key={`m-${index}`} segments={digitSegments[digit]} />
        ))}
      </Card>

      <Seprator />

      <Card className="flex">
        {[...seconds].map((digit, index) => (
          <Digit key={`s-${index}`} segments={digitSegments[digit]} />
        ))}
      </Card>
    </div>
  );
}

export default Clock;
