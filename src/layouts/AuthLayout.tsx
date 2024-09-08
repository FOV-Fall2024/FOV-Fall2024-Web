import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import authbg from "../assets/authbg.jpg";

function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/auth") {
      navigate("/auth/signIn");
    }
  }, [location.pathname, navigate]);

  return (
    <main className="bg-auth-bg w-screen h-screen bg-cover bg-no-repeat lg:bg-none lg:grid lg:grid-cols-2">
      <Outlet />
      <div className="hidden lg:block">
        <img src={authbg} className="object-cover h-screen w-full" />
      </div>
    </main>
  );
}

export default AuthLayout;
