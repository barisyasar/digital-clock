// Digit
import "./style.css";

const Digit = ({ segments }) => {
  return (
    <div className="digit">
      <div
        className={`segment horizontal a ${segments.includes("a") ? "on" : ""}`}
      />
      <div className={`segment b ${segments.includes("b") ? "on" : ""}`} />
      <div className={`segment c ${segments.includes("c") ? "on" : ""}`} />
      <div
        className={`segment horizontal d ${segments.includes("d") ? "on" : ""}`}
      />
      <div className={`segment e ${segments.includes("e") ? "on" : ""}`} />
      <div className={`segment f ${segments.includes("f") ? "on" : ""}`} />
      <div
        className={`segment horizontal g ${segments.includes("g") ? "on" : ""}`}
      />
    </div>
  );
};
export default Digit;
