import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () =>{
        signOut(auth);
    }
    return (
        <nav className="flex sm:justify-center space-x-4">
            {/* https://tailwind-elements.com/snippets/tailwind/tailwindelements/3692881#html-tab-view this link can be usefull for another na */}
            {[
                ['Home', '/'],
                ['Books', '/books'],
                ['Add Book', '/add-book'],
                ['Manage Books', '/manage-book'],
                ['About', '/about'],
                ['Contact', '/contact'],
            ].map(([title, url]) => (
                <Link to={`${url}`} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
            ))}
            {user ? <button className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" onClick={logOut}>Signout</button>:<Link
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" to='/login'>Login</Link>}
        </nav>
    );
};

export default Header;