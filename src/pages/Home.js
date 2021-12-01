import React from 'react'
import HeroSection from '../components/HeroSection'
import LogicSection from '../components/LogicSection'
import { objectLogic } from '../components/LogicSection/Data'
import { objectQuanhe } from '../components/QuanheSection/Data'
import { objectBoole } from '../components/BooleSection/Data'
import QuanheSection from '../components/QuanheSection'
import BooleSection from '../components/BooleSection'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <LogicSection {...objectLogic} />
            <QuanheSection {...objectQuanhe} />
            <BooleSection {...objectBoole} />
        </div>
    )
}

export default Home
