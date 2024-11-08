import { SIDE_BAR_LINKS } from "@/constant"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Button } from "../ui/button"
import { SignOutButton, useUser } from "@clerk/clerk-react"

function LeftSidebar() {
  const { pathname } = useLocation();
  const { user, isLoaded } = useUser();

  return (
    <nav className="hidden md:flex px-6 py-10 flex-col justify-between min-w-[270px] bg-gray-100">
      <div className="flex flex-col gap-11">
        <Link to={"/"} className="flex gap-3 items-center">
          <h1 className="text-2xl font-bold text-blue-600 text-center">
            Social Connect
          </h1>
        </Link>
        {isLoaded &&
          <Link to={`/profile/${user?.id}`} className="flex  items-center gap-3">
            <img
              src={
                user?.imageUrl ||
                "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
              }
              alt="User Profile Pic"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-[18px] font-bold leading-[140%]">{user?.fullName}</p>
            </div>
          </Link>
        }
        <ul className="flex flex-col gap-6">
          {SIDE_BAR_LINKS.map((link) => {
            const isActive = pathname === link.route
            return (
              <li
                key={link.label}
                className={`rounded-lg text-[16px] font-medium leading-[140%] hover:bg-blue-200 transition ${isActive && "bg-blue-400"
                  }`}
              >
                <NavLink
                  to={link.route}
                  className={"flex gap-4 items-center p-4"}
                >
                  <img src={link.imgUrl} alt={link.label} className="w-8 h-8" />

                  {link.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      <SignOutButton >
        <Button
          variant={"ghost"}
          className="hover: bg-transparent"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/4043/4043198.png"
            alt=""
            className="w-10 h-10"
          />
          <p className="text-[14px] font-medium leading-[140%] lg:text-[16px]">
            Logout
          </p>
        </Button>
      </SignOutButton>
    </nav>
  )
}

export default LeftSidebar