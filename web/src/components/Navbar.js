import navlog from "../images/772379.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar is-black is-justify-content-space-between">
        <div className="navbar-brand">
          <a
            href="https://www.youtube.com/watch?v=SD3yhtUTEz0"
            className="navbar-item"
          >
            <img src={navlog} width="28" height="28" alt="icon" />
          </a>
        </div>
        <h1 className="navbar-item">Secret Easter</h1>
        <div className="navbar-item">
          <a href="potet" className="button">
            List
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
