import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(()=>{
        const getOrders = async() =>{
            const email = user.email;
            const url = `http://localhost:8080/order?email=${email}`
           try{
            const {data} = await axios.get(url)
            setOrders(data)
           }
           catch(error){
            console.log(error);
           }
        }
        getOrders()
    },[user])
    return (
        <div class="container p-2 mx-auto sm:p-4 dark:dark:text-gray-100">
            <h2 class="mb-4 text-center text-2xl font-semibold leading-tight">All the orders of books: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="w-full p-6 text-xs text-left whitespace-nowrap">
                    <thead>
                        <tr class="dark:dark:bg-gray-700">
                            <th class="p-3">Buyer</th>
                            <th class="p-3">Book Name</th>
                            <th class="p-3">Phone</th>
                            <th class="p-3">Email</th>
                            <th class="p-3">Address</th>
                            <th class="p-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <tbody key={order._id} class="border-b dark:dark:bg-gray-900 dark:dark:border-gray-700">
                        <tr>
                            <td class="px-3 py-2">
                                <p>{order.name}</p>
                            </td>
                            <td class="px-3 py-2">
                                <p class="dark:dark:text-gray-400">{order.book}</p>
                            </td>
                            <td class="px-3 py-2">
                                <p>{order.phone}</p>
                            </td>
                            <td class="px-3 py-2">
                                <p>{order.email}</p>
                            </td>
                            <td class="px-3 py-2">
                                <p class="dark:dark:text-gray-400">{order.address}</p>
                            </td>
                            <td class="px-3 py-2">
                                <button type="button" title="Open details" class="p-1 rounded-full dark:dark:text-gray-600 hover:dark:dark:bg-gray-700 focus:dark:dark:bg-gray-700">
                                    <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current">
                                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                    </svg>
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