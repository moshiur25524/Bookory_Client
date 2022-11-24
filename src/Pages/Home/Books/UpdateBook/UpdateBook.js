import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateBook = () => {

    const {id} = useParams()
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

    const { register, handleSubmit } = useForm();
    const onSubmit = (data,e) => {
        const url = `http://localhost:8080/book/${id}`
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            // console.log(result);
            e.target.reset()
            toast.warning('Updating A Book !!!')
        })
        // console.log(data)
    };

    return (
        <div>
            <ToastContainer/>
            <h1 className='text-center font-semibold text-5xl text-gray-800'><span className='text-orange-800'>{book.book_name}</span></h1>
            <div className='flex items-center justify-center w-full'>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-6">
                            <input defaultValue={book.book_name} className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="book_name" {...register("book_name", { required: true })} />
                        </div>
                        <div className="form-group mb-6">
                            <input defaultValue={book.image} className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="image" {...register("image", { required: true })} />
                        </div>
                        <div className="form-group mb-6">
                            <input defaultValue={book.supplier_name} className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="supplier_name" {...register("supplier_name", { required: true })} />
                        </div>
                        <div className="form-group mb-6">
                            <input defaultValue={book.price} type='number' className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="price" {...register("price", { required: true })} />
                        </div>
                        <div className="form-group mb-6">
                            <input defaultValue={book.quantity} type='number' className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="quantity" {...register("quantity", { required: true })} />
                        </div>
                        <div className="form-group mb-6">
                            <textarea defaultValue={book.short_description} className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"id="exampleFormControlTextarea13"
                                rows="3"
                                placeholder="short_description" {...register("short_description", { required: true })} />
                        </div>

                        <input type="submit" className="
                                w-full
                                px-6
                                py-2.5
                              bg-blue-600
                              text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                shadow-md
                                hover:bg-blue-700 hover:shadow-lg
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-blue-800 active:shadow-lg
                                transition
                                duration-150
                                ease-in-out" value='Update the book' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBook;