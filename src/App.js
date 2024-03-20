import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Help from "./components/Help";
import NoPage from "./components/NoPage";
import { Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Axios from "axios";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/getData");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HeroSection data={data} />} />
        <Route path="/help" element={<Help />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoPage />} />
      </Routes >
    </>
  );
}

export default App;
