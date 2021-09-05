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
`

export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`

export const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    flex-direction: column;
    max-width:1600px ;
    width: calc(100% - 100px);
    color: #fff;

    h1{
        font-size: clamp(1rem, 8vw, 2rem);
    }
`