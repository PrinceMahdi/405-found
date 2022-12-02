import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Browse from "./Pages/Browse/Browse";
import MyCollection from "./Pages/MyCollection/MyCollection";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/mycollection" element={<MyCollection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
