import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/login";
import Signup from "../components/auth/signup";
import Create from "../components/create";
import Home from "../components/home/home";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default Router;
