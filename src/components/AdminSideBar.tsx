import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutDashboardIcon,
  UtensilsIcon,
  UsersIcon,
  LeafIcon,
  UserIcon,
  CalendarIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

function AdminSideBar() {
  const sidebarItems = [
    {
      path: "/dashboard",
      icon: <LayoutDashboardIcon className="w-5 h-5" />,
      name: "Trang chủ",
    },
    {
      path: "/manageBranch?page=1",
      icon: <Home className="w-5 h-5" />,
      name: "Chi nhánh",
    },
    {
      path: "/manageUser",
      icon: <UsersIcon className="w-5 h-5" />,
      name: "Người dùng",
    },
    {
      path: "/manageFood",
      icon: <UtensilsIcon className="w-5 h-5" />,
      name: "Món ăn",
    },
    {
      path: "/manageIngredient",
      icon: <LeafIcon className="w-5 h-5" />,
      name: "Nguyên liệu",
    },
    {
      path: "/manageStaff",
      icon: <UserIcon className="w-5 h-5" />,
      name: "Nhân viên",
    },
    {
      path: "/manageStaffSchedule",
      icon: <CalendarIcon className="w-5 h-5" />,
      name: "Lịch làm việc",
    },
  ];
  return (
    <>
      <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
      <nav className="mt-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-4 py-2 rounded transition-colors",
                    isActive ? "bg-gray-200" : " hover:bg-gray-100"
                  )
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default AdminSideBar;
