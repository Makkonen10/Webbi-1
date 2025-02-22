function Menu({ menuOpen }) {
  return (
    <ul className={`menu-list ${menuOpen ? "visible" : ""}`}>
      <li><a href="#koti">Koti</a></li>
      <li><a href="#tietoa">Tietoa</a></li>
      <li><a href="#apua">Apua</a></li>
    </ul>
  );
}

export default Menu;
