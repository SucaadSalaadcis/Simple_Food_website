import React from 'react'

import d from '../assets/Img/d.png'
import d4 from '../assets/Img/d4.png'
import d8 from '../assets/Img/d8.png'
import d6 from '../assets/Img/d6.png'


export default function Section2() {
    return (
        <div className='pb-10 mt-2'>
            <h1 className='font-mono text-3xl font-extrabold text-center mb-28'>OUR Menu</h1>

            {/* first div */}
            <div className='px-32 space-y-20 md:space-y-0 md:flex md:justify-evenly'>
                {/* div1 */}
                <div className='bg-gradient-to-r from-[#cde7f7]  to-[#96d6b7] shadow-2xl w-[200px] h-[300px] rounded-full'>
                    <div className='relative bottom-28 w-[320px] right-[68px] '>
                        <img src={d} className='pt-10 mx-auto ' alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center mt-5 text-center b">
                        <p className='relative text-lg font-bold bottom-20'>Mie Gaprek</p>
                        <p className='relative text-xl font-bold bottom-20 '>$89.00</p>
                    </div>

                </div>
                {/* div1 */}
                <div className='bg-gradient-to-r from-[#cde7f7]  to-[#96d6b7] shadow-lg w-[200px] h-[300px] rounded-full'>
                    <div className='relative bottom-28 w-[340px] right-[56px] '>
                        <img src={d4} className='pt-10 mx-auto ' alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center mt-5 text-center b">
                        <p className='relative text-lg font-bold bottom-24'>Mie Ayam</p>
                        <p className='relative text-xl font-bold bottom-24 '>$91.00</p>
                    </div>

                </div>
          
                {/* div2 */}
                <div className='bg-gradient-to-r from-[#cde7f7]  to-[#96d6b7] shadow-lg w-[200px] h-[300px] rounded-full'>
                    <div className='relative bottom-28 w-[340px] right-[36px] '>
                        <img src={d8} className='pt-10 mx-auto ' alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center mt-5 text-center b">
                        <p className='relative text-lg font-bold bottom-24'>Mie Ayam</p>
                        <p className='relative text-xl font-bold bottom-24 '>$21.00</p>
                    </div>

                </div>
          
                {/* div3 */}
                <div className='bg-gradient-to-r from-[#cde7f7]  to-[#96d6b7] shadow-lg w-[200px] h-[300px] rounded-full'>
                    <div className='relative bottom-28 w-[340px] right-[120px] '>
                        <img src={d6} className='pt-10 mx-auto ' alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center mt-5 text-center b">
                        <p className='relative text-lg font-bold bottom-24'>Mie luli</p>
                        <p className='relative text-xl font-bold bottom-24 '>$56.00</p>
                    </div>

                </div>

            </div>
        </div>
    )
}