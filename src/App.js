import "./App.css";
import Form from "./Component/Form";
import Navbar from "./Component/Navbar";
import Table from "./Component/Table";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar Name="SouthLand Avenue" />

        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <Table one="Covid Data" two="Frenchmens" three="Ashlen" />
              }
            />

            <Route path="Form/*" element={<Form />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
