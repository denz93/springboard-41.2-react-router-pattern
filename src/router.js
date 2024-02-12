import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DogList from "./DogList";
import DogDetail from "./DogDetail";
import Colors from "./Colors";
import db from './db.json'
import ColorsNew from "./ColorsNew";
import Color from "./Color";
import { getKey } from "./hooks";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

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

