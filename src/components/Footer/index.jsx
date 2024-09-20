// Footer
import { Icon } from "@iconify/react";
import { CHROME_ICON, GITHUB_ICON, LINKEDIN_ICON } from "../../constants/icons";

function Footer() {
  return (
    <footer className="my-7">
      <div className="container">
        <div className="card">
          <h2 className="mb-7">CONTACT</h2>
          <p className="mb-7">
            You can find more information about me from the links below.
          </p>
          <ul className="flex flex-wrap gap-10">
            <li>
              <a href="https://barisyasar.vercel.app/" target="_blank">
                <Icon icon={CHROME_ICON} />
                <div>My Portfolio</div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/barisyasar5/"
                target="_blank"
              >
                <Icon icon={LINKEDIN_ICON} />
                <div>Linkedin</div>
              </a>
            </li>
            <li>
              <a href="https://github.com/barisyasar" target="_blank">
                <Icon icon={GITHUB_ICON} />
                <div>Github</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
