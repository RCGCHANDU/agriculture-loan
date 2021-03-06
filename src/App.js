import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Signup from "./components/Signup";
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>

  );
}

export default App;
