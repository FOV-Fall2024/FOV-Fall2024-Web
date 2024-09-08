// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout, MainLayout, RootLayout } from "./layouts";
import {
  AboutPage,
  FeedbackPage,
  FoodDetailPage,
  HomeAdminPage,
  HomePage,
  ManageBranchPage,
  ManageFoodPage,
  ManageIngredientPage,
  ManageStaffPage,
  ManageStaffSchedulePage,
  ManageUserPage,
  MenuPage,
  ProfilePage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Layout chính cho toàn bộ trang
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "",
        element: <HomePage />, // Trang home/landing page
      },
      {
        element: <MainLayout />, // Layout cho các trang có chung background
        children: [
          {
            path: "about",
            element: <AboutPage />, // Trang Giới Thiệu
          },

          {
            path: "feedback",
            element: <FeedbackPage />, // Trang Đặt Bàn
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "menu",
            element: <MenuPage />, // Trang Thực Đơn
          },
          {
            path: "menu/:foodId",
            element: <FoodDetailPage />,
          },
        ],
      },
    ],
  },
  {
    element: <DashboardLayout />, // Layout cho các trang dashboard
    children: [
      {
        path: "dashboard",
        element: <HomeAdminPage />,
      },
      {
        path: "manageBranch",
        element: <ManageBranchPage />,
      },
      {
        path: "manageUser",
        element: <ManageUserPage />,
      },
      {
        path: "manageFood",
        element: <ManageFoodPage />,
      },
      {
        path: "manageIngredient",
        element: <ManageIngredientPage />,
      },
      {
        path: "manageStaff",
        element: <ManageStaffPage />,
      },
      {
        path: "manageStaffSchedule",
        element: <ManageStaffSchedulePage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
