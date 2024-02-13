import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DogList from "./DogList";
import DogDetail from "./DogDetail";
import Colors from "./Colors";
import db from './db.json'
import ColorsNew from "./ColorsNew";
import Color from "./Color";
import { getKey } from "./hooks";
import Calculator from "./Calculator";
import Error from './error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/dogs",
        element: <DogList/>,
        async loader() {
          return db.dogs
        }
      },
      {
        path: "/dogs/:name",
        element: <DogDetail/>,
        async loader({params}) {
          return db.dogs.find(dog => dog.name.toLowerCase() === params.name.toLowerCase()) ?? null
        }
      },
      {
        path: "/colors",
        element: <Colors/>
      },
      {
        path: "/colors/new",
        element: <ColorsNew/>
      },
      {
        path: "/colors/:color",
        element: <Color/>,
        async loader({params, request}) {
          const colors = getKey('colors')
          if (!colors) return request.redirect('/colors')
          return colors.find(color => color.name.toLowerCase() === params.color.toLowerCase())
        }
      },
      {
        path: "/:operator/:num1/:num2",
        element: <Calculator/>,
        async loader({params}) {
          return {operator: params.operator, num1: Number(params.num1), num2: Number(params.num2)}
        }
      }
    ]
  },
  
], {
  basename: '/', 
})
export default function MyRouter() {
  return <RouterProvider router={router}>

  </RouterProvider>
}

