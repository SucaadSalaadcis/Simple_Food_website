import React from 'react'

import d10 from '../assets/Img/d10.png'

import { MdFace4 } from "react-icons/md";

export default function Navbar() {

    const navbarText = ['Home', 'About us', 'Menu',];

    return (
        <div className=''>
            {/* navbar div */}
            <div className='flex justify-between p-5 px-5 mt-4 md:px-32'>
                <h1 className='mt-10 text-5xl font-bold text-gray-700 md:text-6xl md:mt-0'><MdFace4 /></h1>

                <div className='flex justify-between gap-9 '>
                    <ul className='hidden gap-10 mt-3 font-sans font-medium text-gray-800 md:flex '>
                        {
                            navbarText.map((text) => (
                                <li>{text}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>

            {/* section 2 */}
            <div className='gap-5 pt-10 pl-5 text-[#353636] md:justify-between md:flex md:pt-24 md:pl-10'>
                {/* left text  */}
                <div className=' md:mt-14'>
                    <h1 className='font-bold text-lg md:text-[2.5rem]  '> Taste for Everyone</h1>
                    <p className='md:mt-7 mt-3 md:text-[20px]'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br /> velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                        <br /> Aliquam vulputate velit imperdiet dolor tempor tristique.
                        <br /> Donec vitae odio quis nisl dapibus malesuada. <br /> Aliquam vulputate   dolor tempor tristique.
                    </p>

                </div>
                {/* right img */}
                <div className='relative mt-20 w-[px] bottom-12 md:mt-0'>
                    <img className='' src={d10} alt="" />
                </div>
            </div>

        </div>
    )
}