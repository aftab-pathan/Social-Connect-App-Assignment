import { Outlet } from "react-router-dom"
import Topbar from "./components/custom/Topbar"
import LeftSidebar from "./components/custom/LeftSidebar"
import Bottombar from "./components/custom/Bottombar"

const AppLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <Bottombar />
    </div>
  )
}

export default AppLayout
