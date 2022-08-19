import { useState } from "react";
import "./App.css";
import EditTemplate from "./Components/EditTemplate";
import NavBar from "./Components/NavBar";
import Templates from "./Components/Templates";

function App() {

  const [selectedTemplateId,setSelectedTemplateId] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <Templates setId={setSelectedTemplateId} />
      <EditTemplate id={selectedTemplateId} setId={setSelectedTemplateId}/>
    </div>
  );
}

export default App;
