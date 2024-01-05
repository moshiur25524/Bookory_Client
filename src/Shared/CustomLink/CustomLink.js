import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <li>
      <NavLink
        to={to}
        className={
          match
            ? "rounded-lg px-3 py-2 font-medium bg-slate-100 text-slate-900"
            : "rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900"
        }
        {...props}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default CustomLink;
