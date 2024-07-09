import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A logo Image" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
        {/* textOnly={true} 명시를 하지않아도 true로 인식함 */}
      </nav>
    </header>
  );
}
