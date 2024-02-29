import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminPanel from "../view/AdminPanel/AdminPanel";
import Registration from "../view/Regitration/Registration";
import SignIn from "../view/SignIn/SignIn";
import Form from "../view/From/Form";
import Dashboard from "../view/Dashboard/Dashboard";
import Salary from "../view/Salary/Salary";
import Employees from "../view/Employees/Employees";
import WelcomePage from "../view/WelcomePage/WelcomePage";
import Layout from "../Components/Layout";
import Task from "../view/Task/Task";

const Admin = () => {
    const user = localStorage.getItem("user")
    if (user == "kmusab824@gmail.com") {
        return true;
    }
    if (user !== "kmusab824@gmail.com") {
        return false;
    }
}

const router = createBrowserRouter([
    {
        path: "/nav",
        element: <Layout />,
        children: [
            {
                path: "Admin",
                element: Admin() && <AdminPanel />
            },
            {
                path: "salary",
                element: Admin() && <Salary />,
            },
            {
                path: "employees",
                element: Admin() && <Employees />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "form",
                element: Admin() && <Form />,
            },
            {
                path: "form/:id",
                element: Admin() && <Form />,
            },
            {
                path: "task",
                element: Admin() && <Task />,
            },

        ],
    },
    {
        path: "/",
        element: <WelcomePage />,
    },
    {
        path: "/signIn",
        element: <SignIn />,
    },
    {
        path: "/registration",
        element: <Registration />,
    },
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router


