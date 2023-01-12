import html from '../assets/img/tech/html.svg';
import css from '../assets/img/tech/css.svg';
import js from '../assets/img/tech/js.svg';
import cpp from '../assets/img/tech/c++.svg';
import python from '../assets/img/tech/python.svg';
import qt from '../assets/img/tech/qt.svg';
import react from '../assets/img/tech/react.svg';
import bootstrap from '../assets/img/tech/bootstrap.svg';
import blender from '../assets/img/tech/blender.svg';
import webgl from '../assets/img/tech/webgl.png';
import fusion from '../assets/img/tech/fusion.svg';


const IMAGES = [
    html, 
    css, 
    js,
    cpp,
    python,
    qt,
    react, 
    bootstrap, 
    blender,
    webgl, 
    fusion
]




export const Skills = () => {
    return (
    <section className='blurred skills' id="skills">
        <h2>SKILLS</h2>
        {/* <div className="skills-banner"/> */}
        <div className='scrolling-banner'>

            <div>
                {IMAGES.map((image, index) => {
                    console.log(image);
                    return <img src={image} key={index}/>
                })}
            </div>
            
            <div>
                {IMAGES.map((image, index) => {
                    console.log(image);
                    return <img src={image} key={index}/>
                })}
            </div>
            

        </div>
    </section>
    )
}




