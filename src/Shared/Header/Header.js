import { signOut } from "firebase/auth";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <nav className="flex sm:justify-center space-x-4 space-y-3">
      {/* https://tailwind-elements.com/snippets/tailwind/tailwindelements/3692881#html-tab-view this link can be usefull for another na */}
      {/* {[
                ['Home', '/'],
                ['Books', '/books'],
                ['About', '/about'],
                ['Contact', '/contact'],
            ].map(([title, url]) => (
                <Link to={`${url}`} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
            ))} */}
      <CustomLink to="/" exact>
        Home
      </CustomLink>
      <CustomLink to="/books">Books</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>
      {user ? (
        <>
          <CustomLink to="/add-book">Add Book</CustomLink>
          <CustomLink to="/manage-book">Manage Books</CustomLink>
          <CustomLink to="/orders">Book Orders</CustomLink>
          {/* <div className="flex justify-center mb-6">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
              className="rounded-full shadow-lg w-10"
              alt="avatar"
            />
          </div> */}
          <h1 className="font-medium bg-indigo-200 rounded-sm p-3">
            {user.email}
          </h1>
          <button
            onClick={logOut}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            Signout <FaSignOutAlt />
          </button>
        </>
      ) : (
        <CustomLink to="/login">
          Login <MdOutlineLogin className=" font-semibol font-extrabold" />
        </CustomLink>
      )}
    </nav>
  );
};

export default Header;
