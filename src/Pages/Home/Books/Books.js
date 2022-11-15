import React, { useEffect, useState } from 'react';
import useBooks from '../../../Hooks/useBooks';
import Book from './Book/Book';

const Books = () => {
    const [books, setBooks] = useBooks()
    // const [books, setBooks] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:8080/books')
    //     .then(res => res.json())
    //     .then(data => setBooks(data))
    // },[])
    return (
        <div className='container my-24 px-6 mx-auto'>
            <h1 class="text-center text-3xl font-bold mb-6 text-gray-800">All the boooks</h1>
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