import React from 'react'
import First from './pages/First'
import Home from "./pages/Home"
import About from "./pages/About"
import Certificate from "./pages/Certificate"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import More from "./pages/More"
import NotFound from "./pages/NotFound"
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children : [
      {
        index: true,
        element: <Home />

      },

      {
        path: "/about",
        element: <About />

      },

      {
        path:"/certificate",
        element: <Certificate />

      },

      {
        path: "/projects",
        element: <Projects />

      },

      {
        path: "/contact",
        element: <Contact />

      },

      {
        path:"/more",
        element: <More />

      },

      {
        path: "*",
        element: <NotFound />

      }
    ]
  }
])




function App() {
  return (

    <RouterProvider router={router}/>
    
  )
}

export default App