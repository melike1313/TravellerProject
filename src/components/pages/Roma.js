import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "../Roma.css";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collesium from '../../images/Collesium.jpg';
import Trevi from '../../images/Trevi.jpg';
import Galleria from '../../images/Galleria.jpeg';
import Maria from '../../images/Maria.jpg';

// withNavigation yükleyici fonksiyonu
export const withNavigation = (Component) => {
 return (props) => <Component {...props} navigate={useNavigate()} />;
};

class Roma extends Component {
 constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 5000;

    this.state = {
      activeSlide: -1,
      prevSlide: -1,
      sliderReady: false,
      slides: [
        {
          id: 'collesium',
          location: 'Collesium',
          city: 'Roma',
          img: Collesium,
        },
        {
          id: 'trevi',
          location: 'Trevi Fountain',
          city: 'Roma',
          img: Trevi,
        },
        {
          id: 'galleria',
          location: 'Galleria Borghese',
          city: 'Roma',
          img: Galleria,
        },
        {
          id: 'maria',
          location: 'Basilica di Santa Maria Maggiore',
          city: 'Roma',
          img: Maria,
        },
      ],
    };
 }

 componentWillUnmount() {
    window.clearTimeout(this.changeTO);
 }

 componentDidMount() {
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
 }

 runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
 }

 changeSlides(change) {
    const { length } = this.state.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
 }

 render() {
    const { activeSlide, prevSlide, sliderReady, slides } = this.state;
    return (
      <div className={classNames('slider', { 's--ready': sliderReady })}>
        <p className="slider__top-heading">Travelers</p>
        <div className="slider__slides">
          {slides.map((slide, index) => (
            <div
              className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
              key={slide.location}
            >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">{slide.city || slide.location}</h3>
                <h2 className="slider__slide-heading">
                    {slide.location.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex}>
                        {word.split('').map((l, index) => (
                            <span key={index} style={{ transitionDelay: `${0.1 * index}s` }}>{l}</span>
                        ))}
                        &nbsp; {/* boşluk */}
                        </span>
                    ))}
                </h2>
                <p className="slider__slide-readmore" onClick={() => this.props.navigate(`/${slide.id}`)}>read more</p>
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                 <div className="slider__slide-part" key={i}>
                    <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                 </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      </div>
    );
 }
}

export default withNavigation(Roma);