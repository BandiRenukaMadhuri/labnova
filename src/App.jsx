import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogHeader from "./components/BlogHeader";
import Careers from "./components/Careers";

// AppLayout Component
function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet /> {/* This renders the child components */}
      <Footer />
    </div>
  );
}

// Define Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/", // Default route
        element: <Body />,
      },
      {
        path: "about", // Correct route name casing
        element: <About />,
      },
      {
        path: "blog", // Correct route name casing
        element: <BlogHeader />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      
      {
        path: "contact", // Correct route name casing
        element: <Contact />,
      },
    ],
  },
]);

// Main App Component
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
