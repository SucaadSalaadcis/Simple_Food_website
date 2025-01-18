import React from 'react'
import Navbar from './Navbar'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from './Footer'

export default function Full_layout() {
    return (

        <div className=' bg-gradient-to-r from-[#cde7f7] via-[#a7d6eb] to-[#96d6b7]'>
            <Navbar />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    )
}
