import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import GraduateProgramPage from './GraduateProgramPage';
import StudentPage from './StudentPage';


import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/GraduateProgramPage" element={<GraduateProgramPage />} />
        <Route path="/StudentPage" element={<StudentPage />} />
      </Routes>
    </div>
  );
}
