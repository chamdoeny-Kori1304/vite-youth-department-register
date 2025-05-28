import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Index from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
