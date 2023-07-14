import { signOut } from "firebase/auth";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

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
      <Link
        to="/"
        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
      >
        Home
      </Link>
      <Link
        to="/books"
        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
      >
        Books
      </Link>
      <Link
        to="/about"
        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
      >
        About
      </Link>
      <Link
        to="/blogs"
        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
      >
        Blogs
      </Link>
      <Link
        to="/contact"
        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
      >
        Contact
      </Link>
      {user ? (
        <>
          <Link
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            to="/add-book"
          >
            Add Book
          </Link>
          <Link
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            to="/manage-book"
          >
            Manage Books
          </Link>
          <Link
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            to="/orders"
          >
            Book Orders
          </Link>
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
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            onClick={logOut}
          >
            Signout <FaSignOutAlt />
          </button>
        </>
      ) : (
        <Link
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          to="/login"
        >
          Login <MdOutlineLogin className=" font-semibol font-extrabold" />
        </Link>
      )}
    </nav>
  );
};

export default Header;
