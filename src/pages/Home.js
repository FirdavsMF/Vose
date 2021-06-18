import React from 'react'
// import Header from '../components/header/Header'
// import Footer from '../components/footer/Footer'
// import About from '../components/about/About';
import Slider from '../components/slider/Slider';
import OurObjects from '../components/ourobjects/OurObjects'
import Services from '../components/services/Services';
import Team from '../components/team/Team'
import News from '../components/news/News'

export default function Home() {
    // useEffect(() => {
    //      window.location.reload()
    //      console.log('====================================');
    //      console.log('dcd');
    //      console.log('====================================');
    // }, [])
    return (
        <>

            <Slider />
            <OurObjects />
            <Services />
            <Team />
        </>
    )
}
