import "./App.css";
import Signup from "./Signup";
import AppBar from "./AppBar";
import Signin from "./Signin";
import AddCourse from "./AddCourse";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <div
        style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
      >
        <Router>
          <AppBar />
          <Routes>
            <Route path="/addcourses" element={<AddCourse />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
