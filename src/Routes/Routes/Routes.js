import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Categories/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import SignUp from "../../Pages/SignUp/SignUp";

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
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <MyAppointment></MyAppointment>
    //         },
    //         {
    //             path: '/dashboard/allusers',
    //             element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/adddoctor',
    //             element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/managedoctors',
    //             element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/payment/:id',

    //             element: <AdminRoute><Payment></Payment></AdminRoute>,
    //             loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
    //         },
    //     ]

    // }
])

export default router;