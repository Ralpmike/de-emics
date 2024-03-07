import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Navbar from "./pages/Navbar";
import ErrorPage from "./errorpage/ErrorPage";


  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path: "services",
          element: <Services />,
        },

        {
          path: "contact",
          element: <ContactUs/>
        },
        {
          path: "*",
          element: <ErrorPage/>,
        },
      ],
    },
  ]);

  function App() {
    return <RouterProvider router={router} />;
  }

export default App;
