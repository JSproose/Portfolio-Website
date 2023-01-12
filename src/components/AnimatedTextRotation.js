import style, { keyframes } from 'styled-components'
import { useEffect, useState } from 'react';


export const AnimatedTextRotation = ({titles}) => {

    const [index, setIndex] = useState(0);

    useEffect(()=> {
        const interval = setInterval(()=> {
            setIndex(index => index + 1);
        }, 2000);
        
        return () => clearInterval(interval);
    },[]);



    return <Wrapper key={index}>{titles[index % titles.length]}</Wrapper>
}

const textAnimation = keyframes`
    0% { opacity:0; transform: translateY(-100px) skewY(10deg) skewX(10deg) ; filter: blur(10px); }
    25% { opacity:1; transform: translateY(0) skewY(0) skewX(0) rotateZ(0); filter: blur(0px); }
    75% { opacity:1; transform: translateY(0) skewY(0) skewX(0) rotateZ(0); filter: blur(0px); }
    100% { opacity:0; transform: translateY(100px) skewY(10deg) skewX(10deg) ; filter: blur(10px); }
`

const Wrapper = style.span`
    display: inline-block;
    opacity: 0;
    animation-name: ${textAnimation};
    animation-duration: 2.3s;
    animation-fill-mode: forwards;
    animation-interation-count: infinite;
`

