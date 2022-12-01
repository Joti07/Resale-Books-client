import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllUsers from "../../Pages/AdminDashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/AdminDashboard/Dashboard/Dashboard";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Categories/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../Buyer/Buyer";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: "*",
                element: <NotFoundPage></NotFoundPage>
            }
        ]
    },
    {
        path: '/admindashboard',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <Home></Home>
            // },
            // {
            //     path: '/dashboard/allusers',
            //     element: <Home></Home>
            // }

        ]

    },
    {
        path: '/sellerdashboard',
        element: <SellerRoute><AllUsers></AllUsers></SellerRoute>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <Home></Home>
            // },
            // {
            //     path: '/dashboard/allusers',
            //     element: <Home></Home>
            // }

        ]

    },
    {
        path: '/buyerdashboard',
        element: <BuyerRoute><AllUsers></AllUsers></BuyerRoute>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <Home></Home>
            // },
            // {
            //     path: '/dashboard/allusers',
            //     element: <Home></Home>
            // }

        ]

    }
])

export default router;