import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// components
import Slide from "./Slide";

// component
const Slideshow = ({ slides }) => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
            {slides.map((slide) => {
                return <Slide key={slide.id} slide={slide} />;
            })}
        </Carousel>
    );
};

export default Slideshow;

// prop-types
Slideshow.propTypes = {
    slides: PropTypes.array.isRequired,
};
