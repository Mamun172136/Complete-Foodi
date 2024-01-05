import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import CartPage from "../pages/shop/CartPage";
import Signup from "../components/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import Login from "../components/Login";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";
import Payment from "../pages/shop/Payment";
import Order from "../pages/dashboard/user/Order";
import UserProfile from "../pages/dashboard/user/UserProfile";
import ManageBookings from "../pages/dashboard/admin/ManageBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/cart-page",
        element: <CartPage></CartPage>,
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: <UserProfile />,
      },
      {
        path: "/process-checkout",
        element: <Payment></Payment>,
      },
    ],
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "dashboard",
    element: (
      // <PrivateRoute>
      <DashboardLayout />
      // </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "update-menu/:id",
        element: <UpdateMenu />,
        loader: ({ params }) =>
          fetch(`http://localhost:6001/menu/${params.id}`),
      },
      {
        path: "bookings",
        element: <ManageBookings />,
      },
    ],
  },
]);

export default router;
