import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {
    const [list, setList] = useState([]);

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setList(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {

        }
    }

const removeProduct = async (id) => {
    try {
        // Variable တွေ မသုံးဘဲ URL အပြည့်အစုံကြီးကို လက်နဲ့ ရိုက်ထည့်ပြီး ခဏစမ်းကြည့်ပါ
        const response = await axios.post('https://ecommerce-mern-yz2j.onrender.com/api/product/remove', 
            { id }, 
            { headers: { token } } 
        );

        if (response.data.success) {
            toast.success(response.data.message);
            await fetchList(); 
        } else {
            toast.error(response.data.message);
        }
    } catch (error) {
        console.log("Error details:", error.response); // ဒီကောင်ကို သေချာကြည့်ပါ
        toast.error(error.message);
    }
}

    useEffect(() => {
        fetchList()
    }, [])
    return (
        <>
            <p className='mb-2 font-semibold'>All Products List</p>
            <div className='flex flex-col gap-2'>
                {/* ------- Table Header ------- */}
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-400 bg-gray-100 text-sm font-bold'>
                    <span>Image</span>
                    <span>Name</span>
                    <span>Category</span>
                    <span>Price</span>
                    <span className='text-center'>Action</span>
                </div>

                {/* ------- Product List ------- */}
                {
                    list.map((item, index) => (
                        <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-2 border border-gray-300 text-sm'>
                            <img className='w-12 h-12 object-cover rounded' src={item.image[0]} alt="" />
                            <p className='truncate'>{item.name}</p>
                            <p className='hidden md:block'>{item.category}</p>
                            <p>{currency}{item.price}</p>
                            {/* Action button ကို mobile မှာလည်း အလယ်ပို့ထားပါတယ် */}
                            <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg font-bold text-red-500 hover:text-red-700'>
                                X
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default List