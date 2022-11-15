import React from 'react';

const AddBook = () => {
    const handleAddBook = e =>{
        e.preventDefault()
        const book_name = e.target.name.value;
        const image = e.target.image.value;
        const supplier_name = e.target.supplier.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const short_description = e.target.description.value;
        const book = {book_name, image, supplier_name, price, quantity, short_description}
        console.log(book);

        fetch('http://localhost:8080/book',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form onSubmit={handleAddBook}>
                    <div class="form-group mb-6">
                        <input type="text" name='name' class="form-control block
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
                    <div class="form-group mb-6">
                        <input type="text" name='image' class="form-control block
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
                    <div class="form-group mb-6">
                        <input type="text" name='supplier' class="form-control block
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
                    <div class="form-group mb-6">
                        <input type="number" name='price' class="form-control block
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
                    <div class="form-group mb-6">
                        <input type="number" name='quantity' class="form-control block
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
                    <div class="form-group mb-6">
                        <textarea
                            class="
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
                
                    <button type="submit" class="
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
    );
};

export default AddBook;