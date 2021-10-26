import React from 'react'
import HeroSection from '../components/HeroSection'
import LogicSection from '../components/LogicSection'
import { objectLogic } from '../components/LogicSection/Data'
import { objectQuanhe } from '../components/QuanheSection/Data'
import QuanheSection from '../components/QuanheSection'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <LogicSection {...objectLogic} />
            <QuanheSection {...objectQuanhe} />
        </div>
    )
}

export default Home
