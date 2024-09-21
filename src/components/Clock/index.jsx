// Clock
import useTime from "../../hooks/useTime";
import Digit from "../Digit";
import digitSegments from "../../constants/digitSegments";
import Seprator from "../Seprator";
import Card from "../Card";

function Clock() {
  const { hours, minutes, seconds } = useTime();
  return (
    <div className="clock flex flex-wrap gap-5 gap-md-10 flex-wrap jc-center ai-center">
      <Card className="flex">
        {[...hours].map((digit, index) => (
          <Digit key={`h-${index}`} segments={digitSegments[digit]} />
        ))}
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
