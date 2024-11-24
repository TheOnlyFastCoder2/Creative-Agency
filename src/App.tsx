import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/Works", element: <Works/>},
      {path: "/About", element: <About/>},
      {path: "/Contacts", element: <Contacts/>},
    ]
  }
]);