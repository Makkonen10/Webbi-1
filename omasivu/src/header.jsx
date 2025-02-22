function Header({ setMenuOpen }) {
  return (
    <header>
      <h1>Mitsubishi Fanisivu</h1>
      <nav>
        <button onClick={() => setMenuOpen(prev => !prev)} className="menu-button">
          Menu
        </button>
      </nav>
    </header>
  );
}

export default Header;

  