import { Outlet } from "react-router-dom"
import Nav from "../Components/Nav"

const Main = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Main