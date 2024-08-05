// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout, RootLayout } from "./layouts";
import { SignInPage, SignUpPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signIn",
        element: <SignInPage />,
      },
      {
        path: "signUp",
        element: <SignUpPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
