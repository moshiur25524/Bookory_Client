import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';

const OrderBook = () => {
    const { id } = useParams()

    const [book, setBook] = useState({})
    const [user] = useAuthState(auth)

    useEffect(() => {
        const url = `http://localhost:8080/book/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBook(data)
            })
    }, [id])

    const handleOrder = e =>{
        e.preventDefault()
        const order = {
            name : e.target.name.value,
            email: e.target.email.value,
            book: e.target.book.value,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        // console.log(order);
        axios.post('http://localhost:8080/order', order)
          .then(function (response) {
            console.log(response);
            const {data} = response;
            if(data.insertedId){
                toast('Order Successfull')
            }
            e.target.reset()
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <ToastContainer/>
            <section class="relative flex flex-wrap lg:h-screen lg:items-center">
                <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div class="mx-auto max-w-lg text-center">
                        <h1 class="text-2xl font-bold sm:text-3xl">Order <span className='text-red-800'>{book.book_name}</span></h1>

                        <p class="mt-4 text-gray-500">
                            {book.short_description?.slice(0, 80)}
                        </p>
                    </div>

                    <form onSubmit={handleOrder} action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
                        <div>
                            <label for="name" class="sr-only">Name</label>

                            <div class="relative">
                                <input
                                    type="text"
                                    value={user.displayName}
                                    name='name'
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Name"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div>
                            <label for="email" class="sr-only">Email</label>

                            <div class="relative">
                                <input
                                    type="email"
                                    name='email'
                                    value={user.email}
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                    disabled
                                />
                            </div>
                        </div>
                        <div>
                            <label for="book" class="sr-only">Book</label>

                            <div class="relative">
                                <input
                                    type="text"
                                    name='book'
                                    value={book.book_name}
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Book"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="address" class="sr-only">Address</label>

                            <div class="relative">
                                <input
                                    type="text"
                                    name='address'
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Address"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="phone" class="sr-only">Phone</label>

                            <div class="relative">
                                <input
                                    type="text"
                                    name='phone'
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Phone"
                                />
                            </div>
                        </div>

                        <div class="flex items-center justify-center">
                            <input type="submit" class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" value="Order Please" />
                        </div>
                    </form>
                </div>

                <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src={book.image}
                        class="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>

        </div>
    );
};

export default OrderBook;