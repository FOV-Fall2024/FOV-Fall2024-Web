import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function MainNavbar() {
  return (
    <div>
      <ul className=" hidden lg:flex lg:items-center lg:justify-evenly lg:p-4">
        <li>
          <Link to={"/"}>Trang chủ</Link>
        </li>
        <li>
          <Link to={"/about"}>Giới Thiệu</Link>
        </li>
        <li>
          <img src={logo} alt="Logo" width={120} height={120} />
        </li>
        <li>
          <Link to={"/menu?category=khaiVi"}>Thực Đơn</Link>
        </li>
        <li>
          <Link to={"/feedback"}>Đánh giá</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNavbar;
