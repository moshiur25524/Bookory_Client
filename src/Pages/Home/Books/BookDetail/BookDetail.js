import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const { id } = useParams()

    const [book, setBook] = useState({})

    useEffect(() => {
        const url = `http://localhost:8080/book/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBook(data)
            })
    }, [id])
    return (
        <div>
            <section class="mb-40">

                <div class="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
                    <div class="container mx-auto xl:px-32">
                        <div class="grid lg:grid-cols-2 flex items-center">
                            <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{ background: " hsla(0, 0%, 100%, 0.55)", backdropFilter: 'blur(30px)' }}>
                                    <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">The best Book <br /><span class="text-blue-600">for {book.book_name}</span></h1>
                                    <p class="text-gray-600">
                                        {book.short_description}
                                    </p>
                                    <a class="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                                    <a class="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                                </div>
                            </div>
                            <div class="md:mb-12 lg:mb-0">
                                <img
                                    src={book.image}
                                    class="w-full rounded-lg shadow-lg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookDetail;