// import CustomNavBar from "./components/CustomNavBar"
import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner";
import AboutUs from "./pages/About";
// import CoursesPage from "./pages/Courses";
import AdDashboard from "./pages/Dashboard";
import EnquiryPage from "./pages/Enquiry";
import EnquiriesAd from "./pages/EnquiryAd";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import PaymentPage from "./pages/Payment";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Profile from "./pages/profile";
import Courses from "./pages/Courses";
// import Template from "./pages/Courses";
// import SignUp from "./pages/SignUp"

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <Suspense fallback={<Spinner />}>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={<Spinner />}>
          <AboutUs />
        </Suspense>
      ),
    },
    {
      path: "/course",
      element: (
        <Suspense fallback={<Spinner />}>
          <Courses/>
        </Suspense>
      ),
    },
    {
      path: "/enquiry",
      element: (
        <Suspense fallback={<Spinner />}>
          <EnquiryPage />
        </Suspense>
      ),
    },
    {
      path: "/payment",
      element: (
        <Suspense fallback={<Spinner />}>
          <PaymentPage />
        </Suspense>
      ),
    },
    {
      path: "/profile",
      element: (
        <Suspense fallback={<Spinner />}>
          <Profile />
        </Suspense>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <Suspense fallback={<Spinner />}>
          <AdDashboard />
        </Suspense>
      ),
    },
    {
      path: "/users",
      element: (
        <Suspense fallback={<Spinner />}>
          <Users />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: (
        <Suspense fallback={<Spinner />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense fallback={<Spinner />}>
          <Register />
        </Suspense>
      ),
    },
    {
      path: "/enquiryad",
      element: (
        <Suspense fallback={<Spinner />}>
          <EnquiriesAd />
        </Suspense>
      ),
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
    // <EnquiryPage/>
  );
}

export default App;

// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Home from "./pages/Home";
// import { Suspense, lazy } from "react";
// import Spinner from "./components/Spinner";
// // import About from "./pages/About"

// const LazyAbout = lazy(()=>import("./pages/About"));
// const LazyContact = lazy(()=>import("./pages/Contact"));

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path:'/home',
//       element: <Suspense fallback={<Spinner/>}><Home/></Suspense>
//     },
//     {
//       path: '/about',
//       element :<Suspense fallback={<Spinner/>}><LazyAbout/></Suspense>
//     },
//     {
//       path: '/contact',
//       element :<Suspense fallback={<Spinner/>}><LazyContact/></Suspense>
//     }
//   ])
//   return (
//     <RouterProvider router={router}></RouterProvider>

//   )
// }
// export default App;
