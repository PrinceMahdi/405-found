import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Browse from "./Pages/Browse/Browse";
import MyCollection from "./Pages/MyCollection/MyCollection";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
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
