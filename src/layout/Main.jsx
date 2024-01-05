import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
import LoadingSpinner from "../components/LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);
  console.log(loading);
  return (
    <div className="bg-prigmayBG">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Navbar />
          <div className="min-h-screen">
            {" "}
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
