// Home
import { Icon } from "@iconify/react/dist/iconify.js";
import Clock from "../components/Clock";
import Layout from "../components/Layout";
import { CODE_ICON } from "../constants/icons";
import TimeZoneSelect from "../components/TimeZoneSelect";
import ClockMode from "../components/ClockMode";

function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="flex flex-col gap-4 my-7">
          <TimeZoneSelect />
          <ClockMode />
        </div>
        <Clock />
        <div className="flex jc-center my-7">
          <a href="https://github.com/barisyasar/digital-clock" target="_blank">
            <Icon icon={CODE_ICON} />
            <div>Source Code</div>
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
