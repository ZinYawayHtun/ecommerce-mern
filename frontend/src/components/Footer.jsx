import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} alt="" className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non impedit, doloribus voluptatum hic iusto eos quod est fugiat expedita ad minima eligendi sunt minus soluta aperiam nostrum labore molestias!
                    </p>
                </div>

                <div>
                    <p className='text-xl font-bold mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+95-9429-76067</li>
                        <li>zinyawayhtun2003@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center text-gray-500">
                    © {new Date().getFullYear()} forever.com - All right reserved.
                </p>

            </div>
        </div>
    )
}

export default Footer