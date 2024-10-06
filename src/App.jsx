import { useState } from 'react'
import Navbar from '../components/nav'
import Home from '../components/Home'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<Navbar />}>
        <Route index element={<Navbar/>} />
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router = {route} />
    </>

  )
}

export default App
