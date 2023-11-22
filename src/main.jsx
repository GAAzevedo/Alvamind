import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import Home from "./routes/Home.jsx"
import "./index.css"
import Websites from "./routes/Websites.jsx"
import Presenca from "./routes/Presenca.jsx"
import Sobre from "./routes/Sobre.jsx"
import Contato from "./routes/Contato.jsx"
import Marketing from "./routes/Marketing.jsx"

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "website",
        element: <Websites/>,
      },
      {
        path: "presenca",
        element: <Presenca />
      },
      {
        path: "sobre",
        element: <Sobre />
      },
      {
        path: "contato",
        element: <Contato />
      },
      ,
      {
        path: "marketing",
        element: <Marketing />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)