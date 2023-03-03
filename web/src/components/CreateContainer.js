function CreateRule() {
  return (
    <div className="form-container">
      <form className="create-form">
        <label>Create new rule</label>
        <input
          className="input is-large create-input"
          type="text"
          placeholder="Create new rule!"
        />
        {/* <button>Create!</button> */}
      </form>
    </div>
  );
}

export default CreateRule;
