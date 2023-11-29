import { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Route, HashRouter, Routes } from "react-router-dom";
import {GlobalStyle} from "./GlobalStyles";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/homepage";
import Productos from "./pages/productos";
import Detail from "./pages/detail";

function App() {
  return (
    <Suspense fallback={<div/>}>
      <HashRouter>
        <GlobalStyle/>
        <Navbar/>
        <Routes>
          <Route exact path="/Inicio" element={<HomePage />} />
          <Route exact path="/Productos" element={<Productos />} />
          <Route exact path="/Productos/:detailId" element={<Detail />} />
          <Route path='/ingsoft/*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </Suspense>
  );
}

export default App;

