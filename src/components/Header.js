import HeaderLogo from '../images/logo.svg'

function Header() {
  return (
    <div>
      <header className="header">
        <img className="header__logo" src={HeaderLogo} alt="Логотип страницы Mesto" />
      </header>
    </div>
  );
}

export default Header;