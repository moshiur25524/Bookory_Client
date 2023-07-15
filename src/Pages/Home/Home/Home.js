import React from "react";
import { Link } from "react-router-dom";
import useBooks from "../../../Hooks/useBooks";
import Book from "../Books/Book/Book";
import Books from "../Books/Books";
import HeroSection from "../HeroSection/HeroSection";
import Testimonials from "../Testimonials/Testimonials";
import Loader from "../../../Shared/Loader/Loader";

const Home = () => {
  const [books, setBooks, loading] = useBooks();
  const slicyBooks = books.slice(0, 3);
  return (
    <div>
      <HeroSection />
      {/* <Books></Books> */}
      <div className="container my-24 px-6 mx-auto">
        <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
          All the books
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 content-center items-center w-full gap-6">
            {slicyBooks.map((book) => (
              <Book key={book._id} book={book}></Book>
            ))}
          </div>
        )}
        <Link to="/books">
          <button
            type="button"
            className="block mx-auto mt-10 px-8 py-3 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            All Books
          </button>
        </Link>
      </div>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
