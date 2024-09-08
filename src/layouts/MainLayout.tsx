import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div>
      <div className="h-[40vh] bg-main-bg bg-no-repeat bg-black bg-opacity-50 bg-blend-overlay text-white flex justify-center items-end">
        <h1 className="mb-12 text-4xl font-bold">
          {pathname === "/menu"
            ? "Thực Đơn"
            : pathname === "/feedback"
            ? "Đánh Giá"
            : pathname === "/about"
            ? "Giới Thiệu"
            : pathname === "/profile"
            ? "Thông Tin Cá Nhân"
            : "Chi Tiết Món Ăn"}
        </h1>
      </div>
      <Outlet />
    </div>
  );
}

export default MainLayout;
