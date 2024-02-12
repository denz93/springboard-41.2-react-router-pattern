import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import App from "./App";
import DogList from "./DogList";
import DogDetail from "./DogDetail";
import db from './db.json'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/dogs",
        index: true,
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

