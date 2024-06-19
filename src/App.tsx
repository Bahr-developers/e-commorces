import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./components/Menu"
import Category from "./components/Category"
import ErrorPage from "./pages/ErrorPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="menu" element={<Menu/>} />
          <Route path="menu-category" element={<Category/>} />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>

    </>
  )
}

export default App
