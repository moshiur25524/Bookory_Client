import React from 'react';
import useBooks from '../../../../Hooks/useBooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
    // const {_id ,book_name,image,short_description,price,quantity,supplier_name} = book;
    const [books, setBooks] = useBooks()

    const handleDeleteBook = id => {
        // console.log(`deleting Id: ${id}`);

        const proceed = window.confirm('Are You sure to Delete ?')
        if (proceed) {
            const url = `http://localhost:8080/book/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // console.log('deleted Successfully');
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
            <section className="antialiased bg-gray-100 text-gray-600 mt-4 px-4">
                <div className="flex flex-col justify-center">
                    {/* <!-- Table --> */}
                    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="text-center font-semibold text-gray-800">Manage Books ({books.length})</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Book Name</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Supplier</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Price</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Delete</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {
                                            books.map(book => <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={book.image} width="40" height="40" alt="Alex Shatov" /></div>
                                                        <div className="font-medium text-gray-800">{book.book_name}</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">{book.supplier_name}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">{book.price}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center">
                                                        <button type="button" onClick={() => handleDeleteBook(book._id)} className="inline-block px-6 py-2.5 bg-transparent text-red-600 font-medium text-xs leading-tight uppercase rounded focus:outline-none  active:text-blue-800 transition duration-300 ease-in-out">Delete</button>
                                                    </div>
                                                </td>
                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                                <Link className="inline-block text-center px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" to={`/add-book`} role="button">Add More Book</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageBooks;