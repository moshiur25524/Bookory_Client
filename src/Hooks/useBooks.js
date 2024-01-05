import { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bookory-server.onrender.com/books")
      .then((res) => res.json())
      .then((data) => {
        // if (!data) {
        //   return <Loader />;
        // } else {
        //   setBooks(data);
        // }
        setLoading(true);
        setBooks(data);
        setLoading(false);
      });
  }, []);

  return [books, setBooks, loading];
};

export default useBooks;
