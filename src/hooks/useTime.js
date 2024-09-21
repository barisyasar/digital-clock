// useTime
import { useEffect } from "react";
import { useState } from "react";

function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return {
      hours: String(time.getHours()).padStart(2, "0"),
      minutes: String(time.getMinutes()).padStart(2, "0"),
      seconds: String(time.getSeconds()).padStart(2, "0"),
    };
  };

  return formatTime(time);
}

export default useTime;
