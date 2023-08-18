import axios from "axios";
import { useState } from "react";
import useRefreshContext from "../hooks/useRefreshContext";

function CreateRule() {
  const [value, setValue] = useState("");
  const { setShouldRefresh } = useRefreshContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/secrets", {
        data: value,
      });
      setValue("");
      console.log({ response });
      setShouldRefresh(true);
    } catch (err) {
      console.log({ err });
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form className="create-form" onSubmit={handleSubmit}>
        <label>Create new rule</label>
        <input
          className="input is-large create-input"
          type="text"
          placeholder="Create new rule!"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* <button>Create!</button> */}
      </form>
    </div>
  );
}

export default CreateRule;
