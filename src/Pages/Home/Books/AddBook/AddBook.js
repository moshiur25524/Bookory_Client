import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBook = () => {
    const handleAddBook = e => {
        e.preventDefault()
        const book_name = e.target.name.value;
        const image = e.target.image.value;
        const supplier_name = e.target.supplier.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const short_description = e.target.description.value;
        const book = { book_name, image, supplier_name, price, quantity, short_description }
        console.log(book);

        fetch('http://localhost:8080/book', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Adding book is Successfull!");
                console.log(data)
            })
        e.target.reset()
    }
    return (
        <div>
            <h1 className="text-center text-3xl font-bold mb-3 mt-3 text-gray-800">Add Book</h1>
            <div className='flex items-center justify-center h-90'>
                <ToastContainer />
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                    <form onSubmit={handleAddBook}>
                        <div className="form-group mb-6">
                            <input type="text" name='name' className="form-control block
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
                                placeholder="book_name" />
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" name='image' className="form-control block
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
                                placeholder="image URL" />
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" name='supplier' className="form-control block
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
                                placeholder="supplier_name" />
                        </div>
                        <div className="form-group mb-6">
                            <input type="number" name='price' className="form-control block
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
                                placeholder="price" />
                        </div>
                        <div className="form-group mb-6">
                            <input type="number" name='quantity' className="form-control block
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
                                placeholder="Quantity" />
                        </div>
                        <div className="form-group mb-6">
                            <textarea
                                className="
                                        form-control
                                        block
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
                                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                  "
                                id="exampleFormControlTextarea13"
                                rows="3"
                                name='description'
                                placeholder="Book Description"
                            ></textarea>
                        </div>

                        <button type="submit" className="
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
                                ease-in-out">Add A book</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;