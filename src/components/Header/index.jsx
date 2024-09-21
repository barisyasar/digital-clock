// Header
import Card from "../Card";
import ThemeButton from "../ThemeButton";

function Header() {
  return (
    <header className="my-7">
      <div className="container">
        <Card>
          <div className="flex jc-between ai-center">
            <h1>Tik Tock</h1>
            <ThemeButton />
          </div>
        </Card>
      </div>
    </header>
  );
}

export default Header;
