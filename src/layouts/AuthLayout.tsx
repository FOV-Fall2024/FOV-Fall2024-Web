import React, { useEffect } from "react";
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
    // <main className="pb-5 pl-8 bg-white max-md:pl-5">
    //   <div className="flex gap-5 max-md:flex-col">
    //     <section className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
    //       <div className="flex flex-col self-stretch my-auto text-sm max-md:mt-10 max-md:max-w-full">
    //         <img
    //           loading="lazy"
    //           src={authbg}
    //           alt=""
    //           className="bg-blend-normal aspect-[1.82] w-[91px]"
    //         />
    //         <div className="flex flex-col items-start pl-20 mt-32 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
    //           <h1 className="text-4xl font-bold text-yellow-950">Login</h1>
    //           <p className="mt-6 text-stone-700">
    //             Don't have an account?{" "}
    //             <span className="font-medium text-sky-500">Sign up</span>
    //           </p>
    //           <Outlet />
    //         </div>
    //       </div>
    //     </section>
    //     <aside className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
    //       <img
    //         loading="lazy"
    //         src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ac0ff31cf560e8436a184628f0803a3d27733c59af03cec515f50f2f2b84418?apiKey=4d3daa30de2b4ffbab85b7411775e359&&apiKey=4d3daa30de2b4ffbab85b7411775e359"
    //         alt="Login illustration"
    //         className="grow w-full aspect-[0.72] max-md:mt-10 max-md:max-w-full"
    //       />
    //     </aside>
    //   </div>
    // </main>
    <main className="bg-white flex justify-between">
      <Outlet />
      <img
        src={authbg}
        alt="authbg"
        loading="lazy"
        className="w-1/2 h-screen aspect-auto object-cover"
      />
    </main>
  );
}

export default AuthLayout;
