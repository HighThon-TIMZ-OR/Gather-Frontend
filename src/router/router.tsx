import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/auth";
import Home from "../components/home/home";
import Mypage from "../components/auth/Mypage"
import Room from '../components/auth/Room';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/room" element={<Room/>}/>
      </Routes>
    </>
  );
}

export default Router;
