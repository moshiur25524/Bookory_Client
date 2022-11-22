import React from 'react';
import useBooks from '../../../../Hooks/useBooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageBooks = () => {
    // const {_id ,book_name,image,short_description,price,quantity,supplier_name} = book;
    const [books, setBooks] = useBooks()

    const handleDeleteBook = id => {
        console.log(`deleting Id: ${id}`);

        const proceed = window.confirm('Are You sure to Delete ?')
        if (proceed) {
            const url = `http://localhost:8080/book/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted Successfully');
                        const remaining = books.filter(book => book._id !== id)
                        setBooks(remaining)
                        toast.error('Deleted a Book')
                    }

                })
        }

    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            {/* <h1>Manage all the books</h1> */}
            <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
                <div class="flex flex-col justify-center h-full">
                    {/* <!-- Table --> */}
                    <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="text-center font-semibold text-gray-800">Manage Books ({books.length})</h2>
                        </header>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Book Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Supplier</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Price</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Delete</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {
                                            books.map(book => <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src={book.image} width="40" height="40" alt="Alex Shatov" /></div>
                                                        <div class="font-medium text-gray-800">{book.book_name}</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">{book.supplier_name}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-medium text-green-500">{book.price}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-lg text-center">
                                                        <button type="button" onClick={() => handleDeleteBook(book._id)} class="inline-block px-6 py-2.5 bg-transparent text-red-600 font-medium text-xs leading-tight uppercase rounded focus:outline-none  active:text-blue-800 transition duration-300 ease-in-out">Delete</button>
                                                    </div>
                                                </td>
                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageBooks;