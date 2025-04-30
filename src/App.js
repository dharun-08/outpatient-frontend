import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/Home";
import Title from "./components/title"
import AddPatientScreen from "./pages/addpatientscreen";
import BookAppointmentScreen from "./pages/bookappointment";
import ViewAppointment from "./pages/viewAppointment";
import PaymentScreen from "./pages/paymentscreen";

function App() {
  return (
      <div className="App">
        <Title />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addpatient" element={<AddPatientScreen />} />
          <Route path="/bookAppointment" element={<BookAppointmentScreen />} />
          <Route path="/viewAppointment" element={<ViewAppointment />} />
          <Route path="/payment" element={<PaymentScreen />} />
        </Routes>
      </div>
  );
}

export default App;
