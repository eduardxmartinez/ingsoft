import { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {GlobalStyle} from "./GlobalStyles";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/homepage";

function App() {
  return (
    <Suspense fallback={<div/>}>
      <Router>
        <GlobalStyle/>
        <Navbar/>
        <Routes>
          <Route exact path="/ingsoft" element={<HomePage />} />
          <Route path='/ingsoft/*' element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;

