import axios from "axios";
import { useEffect, useState } from "react";
import useRefreshContext from "../hooks/useRefreshContext";
import { Card } from "./Card";

function List() {
  const [secrets, setSecrets] = useState([]);
  const { shouldRefresh, setShouldRefresh } = useRefreshContext();
  const [currentlyEditing, setCurrentlyEditing] = useState();

  const onComplete = () => {
    setCurrentlyEditing("");
  };

  const setEditing = (itemId) => {
    if (currentlyEditing === itemId) {
      setCurrentlyEditing("");
    } else {
      setCurrentlyEditing(itemId);
    }
  };

  useEffect(() => {
    setShouldRefresh(true);
  }, []);

  useEffect(() => {
    console.log("ShouldRefresh changed");
    const fetchSecrets = async () => {
      const response = await axios.get("http://localhost:3001/api/secrets");

      setSecrets(response.data.data);
    };
    if (shouldRefresh) {
      console.log("We should refresh!");
      fetchSecrets();
      setShouldRefresh(false);
    }
  }, [shouldRefresh]);

  if (!secrets || !secrets.length) return;

  return (
    <>
      {/* <h1 className="rules-headline title is-3 ">List of rules</h1> */}
      <div id="cards">
        {secrets.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              text={item.text}
              isEditing={item.id === currentlyEditing}
              // setEditing={() => setCurrentlyEditing(item.id)}
              setEditing={setEditing}
              onComplete={onComplete}
            />
          );
        })}
      </div>
    </>
  );
}

export default List;
