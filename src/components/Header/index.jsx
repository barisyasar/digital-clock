// Header
import ThemeButton from "../ThemeButton";

function Header() {
  return (
    <header className="my-7">
      <div className="container">
        <div className="card">
          <div className="flex jc-between ai-center">
            <h1>Tik Tock</h1>
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
