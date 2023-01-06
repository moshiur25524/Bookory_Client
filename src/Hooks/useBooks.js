import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://bookory-server.onrender.com/books')
            .then(res => res.json())
            .then(data => {
                if(!data){
                    return <p>Loading...</p>
                }
                else{
                    setBooks(data)
                }
            })
    }, [])

    return [books, setBooks]
}

export default useBooks;