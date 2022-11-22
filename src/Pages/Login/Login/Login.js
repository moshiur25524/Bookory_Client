import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loader from '../../../Shared/Loader/Loader';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { email, password }
        console.log(user);
        signInWithEmailAndPassword(email, password)
        e.target.reset()
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loader />
    }

    if (error) {
        console.log(error.message);
    }
    return (
        <div>

            <section class="h-screen">
                <div class="px-6 h-full text-gray-800">
                    <div
                        class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                class="w-full"
                                alt="Sample demo"
                            />
                        </div>
                        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={handleLogin}>
                                <div class="flex flex-row items-center justify-center lg:justify-start">
                                    <p class="text-lg mb-0 mr-4">Sign in with</p>
                                    <SocialLogin />
                                </div>

                                <div
                                    class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p class="text-center font-semibold mx-4 mb-0">Or</p>
                                </div>


                                <div class="mb-6">
                                    <input
                                        type="email"
                                        name='email'
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>

                                <div class="mb-6">
                                    <input
                                        type="password"
                                        name='password'
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Password"
                                        required
                                    />
                                </div>

                                <div class="flex justify-between items-center mb-6">
                                    <div class="form-group form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck2"
                                        />
                                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                                        >Remember me</label
                                        >
                                    </div>
                                    <a href='#' class="text-gray-800">Forgot password?</a>
                                </div>

                                <div class="text-center lg:text-left">
                                    <input
                                        type="submit"
                                        value='Login'
                                        class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    />

                                    {error && <div class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
                                        {error.message}
                                    </div>}

                                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Yet have no Account?
                                        <Link
                                            to='/register'
                                            class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        >Register Please</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;