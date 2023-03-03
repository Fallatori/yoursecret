import axios from "axios";
import { useEffect, useState } from "react";

function List() {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    const fetchSecrets = async () => {
      const response = await axios.get("http://localhost:3001/api/secrets");

      setSecrets(response.data.data);
    };
    fetchSecrets();
  }, []);

  console.log({ secrets });

  return (
    <div>
      <h1 className="rules-headline title is-1 ">List</h1>
      <div className="container is-widescreen">
        {secrets.map((item) => {
          return <p className="box">{item.text}</p>;
        })}
      </div>
    </div>
  );
}

export default List;
