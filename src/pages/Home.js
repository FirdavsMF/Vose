import React from 'react'
import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';
import OurObjects from '../components/ourobjects/OurObjects'
import Services from '../components/services/Services';
import Team from '../components/team/Team'
import News from '../components/news/News'

export default function Home() {
    return (
        <>
            <Header />
            <Slider />
            <About />
            <OurObjects />
            <Services />
            <Team />
            <News />
            <Footer />
        </>
    )
}
