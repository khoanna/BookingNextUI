import React from 'react'
import Hero from '../components/HomePage/Hero'
import Rooms from '../components/HomePage/Rooms'
import Discount from '../components/HomePage/Discount'
import Gallery from '../components/HomePage/ImageGallery'

const Home = () => {
    return (
        <div>
            <Hero />
            <Rooms />
            <Discount />
            <Gallery />
        </div>
    )
}

export default Home