import React, {useEffect, useRef, useState} from 'react';
import food1 from '../../assets/image-01.png';
import food2 from '../../assets/image-02.png';
import food3 from '../../assets/image-03.png';
import food4 from '../../assets/image-04.png';

const Index = () => {

    const controls = [
        {thumb: food1, label: 'Roll'},
        {thumb: food2, label: 'Pasta'},
        {thumb: food3, label: 'Spicy Roll'},
        {thumb: food4, label: 'Sandwich'},
    ];

    const slides = [food1, food2, food3, food4];

    const [activeIndex, setActiveIndex] = useState(0);

    const interValRef = useRef(null);

    const startAutoRotate = () => {
        stopAutoRotate();
        interValRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % slides.length);
        }, 2000);
    };

    const stopAutoRotate = () => {
        if (interValRef.current) clearInterval(interValRef.current)
    };

    useEffect(() => {
        startAutoRotate()
        return stopAutoRotate;
    }, []);

    const handleClick = (index) => {
        stopAutoRotate();
        setActiveIndex(index);
    }

    return (
        <div className="main">
            {/* Social Icons */}
            <div className='social-icons'>
                <a href='#'>
                    <i className='ri-facebook-circle-fill'></i>
                </a>
                <a href='#'>
                    <i className='ri-instagram-fill'></i>
                </a>
                <a href='#'>
                    <i className='ri-twitter-fill'></i>
                </a>
                <a href='#'>
                    <i className='ri-pinterest-fill'></i>
                </a>
            </div>

            {/* Hero Content */}
            <div className='hero-content'>
                <h1>
                    <span>Delicious , Tasty <br/> & Fresh </span> Meal <br/>
                </h1>
                <p>
                    Click any food below to see it rotate into view on the circular image slider. <br/>
                    The rotation follows the edge of the circle in an anti-clockwise direction!
                </p>
                <a href='#' className='explore-btn'>
                    Explore menu
                    <span className='arrow'>
                        →
                    </span>
                </a>

                {/*Food Controls*/}
                <div className="controls">
                    {controls.map((item, index) => (
                        <div
                            key={index}
                            className={`control ${activeIndex === index ? 'active' : ''}`}
                            data-index={index +1}
                            onClick={() => handleClick(index)}
                        >
                            <img src={item.thumb} alt={item.label}/>
                            <h3>{item.label}</h3>
                            <p>Details About{item.label}</p>
                       </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Index;
