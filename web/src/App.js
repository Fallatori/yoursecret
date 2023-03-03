import "bulma/css/bulma.css";
import "./App.css";
import CreateRule from "./components/CreateContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import List from "./components/List";

function App() {
  return (
    <div className="main-content">
      <Navbar />
      {/* <button className="random-btn button">Get Random Rule</button> */}
      <div>
        <List />
      </div>
      <Modal />
      <div className="create-box">
        <CreateRule />
      </div>
    </div>
  );
}

export default App;
