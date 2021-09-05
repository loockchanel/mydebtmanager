import React from 'react'
import { 
    HeroSection, 
    HeroWrapper,
    HeroImage, 
    HeroContent
} from './HeroElement'
import banner from '../../images/pexels-mikhail-nilov-6964138.jpg'

const HeroElement = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                <HeroImage src={banner}/>
                <HeroContent>
                        <h1>Welcome to <br/> My Debt Manager</h1>
                </HeroContent>
            </HeroWrapper>
        </HeroSection>
    )
}

export default HeroElement
