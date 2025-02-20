import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/index";
import { Admin } from "./pages/admin/index";
import { Login } from "./pages/login/index";
import { Networks } from "./pages/networks/index";
import { Private } from "./routes/Private";
import { ErrorPage } from "./pages/error/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/admin/social",
    element: (
      <Private>
        <Networks />
      </Private>
    ),
  },




       {
        path: "*",
        element: <ErrorPage/>
       }

]);

export { router };
