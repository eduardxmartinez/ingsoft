import { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<div/>}>
      <Router>
      <Navbar/>
        <Routes>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;

