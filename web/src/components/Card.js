import { useEffect, useRef, useState } from "react";
import { EditContainer } from "./EditCointainer";

export function Card({ id, text, isEditing, setEditing, onComplete }) {
  const [coords, setCoords] = useState({ x: null, y: null });
  const ref = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const element = ref.current;

    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      console.log("Removing listener", { ref: ref.current });
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const showEdit = () => {
    setEditing(id);
    console.log(`setEditing to ${id}`);
  };

  return (
    <div onClick={showEdit}>
      <div
        className="card"
        style={{ "--mouse-x": coords.x + "px", "--mouse-y": coords.y + "px" }}
        ref={ref}
      >
        <div className="card-content">
          <p>{text}</p>
          {isEditing && (
            <EditContainer id={id} text={text} onComplete={onComplete} />
          )}
        </div>
      </div>
    </div>
  );
}
