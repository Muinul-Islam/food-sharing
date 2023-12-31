import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const menus = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="availableFoods">Available Foods</NavLink>
      </li>
      <li>
        <NavLink to="addFoods">Add Foods</NavLink>
      </li>
      <li>
        <NavLink to="manageFoods">Manage My Foods</NavLink>
      </li>
      <li>
        <NavLink to="foodRequest">My Food Request</NavLink>
      </li>
      <li>
        <NavLink to="signUp">Sign Up</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-green-700 max-w-screen-xl mx-auto rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menus}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            <img className="w-10 rounded-full" src={logo} alt="" />
            <p>
              Share<span className="text-red-600">Food</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1">{menus}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <div className="mr-4 text-white">{user.email}</div>
              <button
                onClick={logout}
                className="btn bg-red-600 border-none text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="login" className="btn bg-red-600 border-none text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
