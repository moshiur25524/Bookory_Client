import React from "react";
import useBooks from "../../../Hooks/useBooks";
import Book from "./Book/Book";
import Loader from "../../../Shared/Loader/Loader";

const Books = () => {
  const [books, setBooks, loading] = useBooks();
  // const [books, setBooks] = useState([])

  // useEffect(()=>{
  //     fetch('https://bookory-server.onrender.com/books')
  //     .then(res => res.json())
  //     .then(data => setBooks(data))
  // },[])
  return (
    <div className="container my-24 px-6 mx-auto">
      <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
        All the books
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 content-center items-center w-full gap-6">
          {books.map((book) => (
            <Book key={book._id} book={book}></Book>
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
