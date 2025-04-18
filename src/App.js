import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/Home";
import Title from "./components/title"
import AddPatientScreen from "./pages/addpatientscreen";
function App() {
  return (
      <div className="App">
        <Title />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addpatient" element={<AddPatientScreen />} />
        </Routes>
      </div>
  );
}

export default App;
