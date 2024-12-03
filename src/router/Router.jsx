import {
    createBrowserRouter,
   
  } from "react-router-dom";
import App from "../App";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Coffees from "../components/Coffees";
import Users from "../pages/Users";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    
      children: [
        {
          path: "",
          element: <Coffees></Coffees>,
          loader: ()=> fetch('http://localhost:7500/coffee'),
        },
        {
          path: "/addCoffee",
          element: <AddCoffee></AddCoffee>,
         
        },
        {
            path: "/updateCoffee/:id", 
            element: <UpdateCoffee></UpdateCoffee>,
            loader: ({params})=> fetch(`http://localhost:7500/coffee/${params.id}`)
        },
        {
          path: '/users',
          element: <Users></Users>,
          loader: ()=>fetch('http://localhost:7500/users')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }

      ]
    },
   
   
  ]);

  export default router