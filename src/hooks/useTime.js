// useTime
import { useEffect, useState } from "react";

function useTime(timeZone = "UTC", hour12 = false) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12,
      timeZone,
    };

    const rightNow = time.toLocaleString("en-US", options).split(":");

    return {
      hours: rightNow[0],
      minutes: rightNow[1],
      seconds: rightNow[2].split(" ")[0],
      period: rightNow[2].split(" ")?.[1],
    };
  };

  return formatTime(time);
}

export default useTime;
