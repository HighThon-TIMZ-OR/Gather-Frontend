import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/auth";
import Home from "../components/home/home";
import Mypage from "../components/auth/Mypage"

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage/>} />
      </Routes>
    </>
  );
}

export default Router;
