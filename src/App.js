import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
