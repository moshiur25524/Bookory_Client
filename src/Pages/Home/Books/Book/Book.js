import React from 'react';

const Book = ({ book }) => {
    const {book_name,image,short_description,price,quantity,supplier_name} = book;
    return (
        <div>
            <div class="flex justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <img class="rounded-t-lg w-full" src={image} alt="" />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">{book_name}</h5>
                        <p class="text-gray-700 text-base mb-4">
                            {short_description.slice(0,90)} 
                            <a href="#!" class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">Learn More</a>
                        </p>
                        <p class="text-gray-700 text-base mb-4">
                          Price: {price} $
                        </p>
                        <p class="text-gray-700 text-base mb-4">
                           Quantity: {quantity} $
                        </p>
                        <p class="text-gray-700 text-base mb-4">
                          Supplier: {supplier_name} $
                        </p>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;