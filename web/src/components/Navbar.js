import navlog from "../images/772379.png";

function Navbar({ onClickList, showingList }) {
  return (
    <nav className="navbar is-fixed-top is-black is-justify-content-space-between is-align-items-center">
      <div className="navbar-brand">
        <a
          href="https://www.youtube.com/watch?v=SD3yhtUTEz0"
          className="navbar-item"
        >
          <img src={navlog} width="28" height="28" alt="icon" />
        </a>
      </div>
      <h1 className="navbar-item nav-headline">Random rules</h1>
      <div className="navbar-item">
        <button onClick={onClickList} className="button mw80 list-button">
          {showingList ? "BACK" : "LIST"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
