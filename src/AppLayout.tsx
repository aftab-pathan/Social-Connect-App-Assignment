import { Outlet } from "react-router-dom"
import Topbar from "./components/custom/Topbar"
import LeftSidebar from "./components/custom/LeftSidebar"
import Bottombar from "./components/custom/Bottombar"
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react"

const AppLayout = () => {


  return (
    <>
      <SignedIn>
        <div className="w-full md:flex">
          <Topbar />
          <LeftSidebar />
          <section className="flex flex-1 h-full">
            <Outlet />
          </section>
          <Bottombar />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex justify-center h-full w-full items-center">
          <SignIn fallbackRedirectUrl={"/"} forceRedirectUrl={"/"} />
        </div>
      </SignedOut>
    </>
  )
}

export default AppLayout
