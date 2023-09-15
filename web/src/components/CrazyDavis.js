// Referance to Tracey Davis from the Harry Potter fanfiction HPMORs
export function CrazyDavis({ text, onClick }) {
  return (
    <div className="crazyz-box">
      <button className="outside-btn" onClick={onClick}>
        <div className="inside-btn">{text}</div>
      </button>
    </div>
  );
}
