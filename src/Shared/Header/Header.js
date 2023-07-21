import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdOutlineLogin } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  const [menuitem, setMenuitem] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <nav className="flex sm:justify-center space-x-4 space-y-3 ">
      <div>
        <div className="md:block">
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setMenuitem(!menuitem)}
            >
              {menuitem ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              menuitem ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <CustomLink to="/" exact>
                Home
              </CustomLink>
              <CustomLink to="/books">Books</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/blogs">Blogs</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
              {user ? (
                <>
                  <button
                    className="relative rounded-lg px-3 py-2 font-medium hover:bg-slate-100 text-slate-900"
                    onClick={toggleDropdown}
                  >
                    Book Info
                    {isDropdownOpen ? (
                      <IoIosArrowForward />
                    ) : (
                      <IoIosArrowDown />
                    )}
                    <ul
                      className={`${
                        isDropdownOpen ? "block" : "hidden"
                      } bg-white absolute top-10 rounded flex flex-col my-5 items-center w-full`}
                    >
                      <CustomLink to="/orders"> Orders</CustomLink>
                      <CustomLink to="/add-book">Add </CustomLink>
                      <CustomLink to="/manage-book">Manage </CustomLink>
                    </ul>
                  </button>

                  {/* <div className="flex justify-center mb-6">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
              className="rounded-full shadow-lg w-10"
              alt="avatar"
            />
          </div> */}

                  {/* <h1 className="font-medium bg-indigo-200 rounded-sm p-3">
              {user.email.split("@")[0]}
            </h1> */}
                  <button
                    onClick={logOut}
                    className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                  >
                    Signout <FaSignOutAlt />
                  </button>
                </>
              ) : (
                <CustomLink to="/login">
                  Login{" "}
                  <MdOutlineLogin className=" font-semibol font-extrabold" />
                </CustomLink>
              )}
              {/* https://tailwind-elements.com/snippets/tailwind/tailwindelements/3692881#html-tab-view this link can be usefull for another na */}
              {/* {[
                ['Home', '/'],
                ['Books', '/books'],
                ['About', '/about'],
                ['Contact', '/contact'],
            ].map(([title, url]) => (
                <Link to={`${url}`} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
            ))} */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
