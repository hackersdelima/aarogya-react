import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Doctors from "./pages/doctors/Doctors";
import NewDoctor from "./pages/doctors/NewDoctor";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewPatient from "./pages/patients/NewPatient";
import Patients from "./pages/patients/Patients";

function App() {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Login />}></Route>
          <Route path="dashboard" element={<Home />}></Route>
          <Route path="patients">
            <Route index element={<Patients />}></Route>
            <Route path=":patientId" element={<Patients />}></Route>
            <Route path="new" element={<NewPatient />}></Route>
          </Route>
          <Route path="doctors">
            <Route index element={<Doctors />}></Route>
            <Route path=":doctorId" element={<Doctors />}></Route>
            <Route path="new" element={<NewDoctor />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
