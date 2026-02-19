import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import About from "./components/AboutUs/About";
import Contact from "./components/ContactUs/Contact";
import SideFloatButtons from "./components/SideFloatButtons/SideFloatButtons";
import SocialBar from "./components/SocialBar/SocialBar";

//
import ProductsLayout from "./components/products/ProductsLayout";
import CeramicPorcelain from "./components/products/CeramicPorcelain";
import NaturalMarble from "./components/products/NaturalMarble";
import ArtificialMarbleSinks from "./components/products/ArtificialMarbleSinks";
import FacadeStones from "./components/products/FacadeStones";
import OutdoorTiles from "./components/products/OutdoorTiles";

function Root() {
  return (
    <div dir="rtl">
      <Navbar />
      <SideFloatButtons
        side="right"
        brand="LUX TILES"
        phone="2010xxxxxxx"
        whatsapp="2010xxxxxxx"
        locationUrl="https://maps.google.com/?q=Your+Showroom"
        offsetTop={360}
      />
      <Outlet />
      <SocialBar />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // Home
      { index: true, element: <Home /> },

      // Static pages
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },

      // =======================
      // Products Routes
      // =======================
      {
        path: "products",
        element: <ProductsLayout />,
        children: [
          {
            index: true,
            element: <CeramicPorcelain />,
          },
          {
            path: "ceramic-porcelain",
            element: <CeramicPorcelain />,
          },
          {
            path: "natural-marble",
            element: <NaturalMarble />,
          },
          {
            path: "artificial-marble-sinks",
            element: <ArtificialMarbleSinks />,
          },
          {
            path: "facade-stones",
            element: <FacadeStones />,
          },
          {
            path: "outdoor-tiles",
            element: <OutdoorTiles />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
