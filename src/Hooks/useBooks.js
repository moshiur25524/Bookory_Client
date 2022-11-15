import { useEffect, useState } from "react";

const useBooks = () =>{
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return [books, setBooks]
}

export default useBooks;