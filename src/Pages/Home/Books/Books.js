import React, { useEffect, useState } from 'react';
import Book from './Book/Book';

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='container my-24 px-6 mx-auto'>
            <h1 className='text-center'>All the boooks: {books.length}</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 content-center items-center w-full gap-6'>
                {
                    books.map(book => <Book key={book._id}
                    book = {book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;