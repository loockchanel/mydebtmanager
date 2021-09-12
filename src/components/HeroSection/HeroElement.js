import styled from "styled-components";

export const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    background: black;
`

export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.5;
`

export const HeroContent = styled.div`
    padding: 200px;
    z-index: 10;
    flex-direction: column;
    max-width:1600px ;
    width: calc(100% - 100px);
    color: #fff;
    

    h1{
        font-size: clamp(5rem, 8vw, 2rem);
        color: #a5b06d;
    }

    h2{
        color: #fff;
        font-size: clamp(4rem, 8vw, 2rem);
    }
`