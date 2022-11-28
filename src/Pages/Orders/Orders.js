import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import deleteButton from '../../Resources/icons8-remove-64.png'
import { toast, ToastContainer } from 'react-toastify';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:8080/order?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setOrders(data)
            }

            catch (error) {
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders()
    }, [user])

    const handleDeleteOrder = id => {

        const proceed = window.confirm('Are You Sure to Delete ?')

        if(proceed){
        const url =  `http://localhost:8080/order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                const remaining = orders.filter(order => order._id !== id)
                setOrders(remaining)
                toast.error('Order Deleted')
            }
            console.log(data);
        })
        console.log('deleted', id);
        }

    }
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:dark:text-gray-100">
             <ToastContainer></ToastContainer>
            <h2 className="mb-4 text-center text-2xl font-semibold leading-tight">Ordered books: {orders.length === 0 ? <p className='text-3xl font-bold mb-6 text-red-700'>Yet you do not Order. Order Please !!!</p>: orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                  {orders.length === 0 ? '':  <thead>
                        <tr className="text-xl dark:dark:bg-gray-700">
                            <th className="p-3">Buyer</th>
                            <th className="p-3">Book Name</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Address</th>
                            <th className="p-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead> }
                    {
                        orders.map(order => <tbody key={order._id} className="border-b dark:dark:bg-gray-900 dark:dark:border-gray-700">
                            <tr>
                                <td className="px-3 py-2">
                                    <p>{order.name}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p className="dark:dark:text-gray-400">{order.book}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>{order.phone}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>{order.email}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p className="dark:dark:text-gray-400">{order.address}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" onClick={()=>handleDeleteOrder(order._id)} title="Open details" className="p-1 rounded-full dark:dark:text-gray-600 hover:dark:dark:bg-gray-700 focus:dark:dark:bg-gray-700">
                                   <img src={deleteButton} alt="" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Orders;