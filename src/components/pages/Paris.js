import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "../Paris.css";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import louvreImage from '../../images/Louvre.jpg';
import EyfelKulesi from '../../images/Eyfel.jpg';
import PalaisMuze from '../../images/Palais.jpg';
import Disney from '../../images/Disneyland.jpg';

// withNavigation yükleyici fonksiyonu
export const withNavigation = (Component) => {
 return (props) => <Component {...props} navigate={useNavigate()} />;
};

class Paris extends Component {
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
          id: 'louvre',
          location: 'Louvre Museum',
          city: 'Paris',
          img: louvreImage,
        },
        {
          id: 'eyfel',
          location: 'Eiffel Tower',
          img: EyfelKulesi,
        },
        {
          id: 'palais',
          location: 'Palais',
          city: 'Paris',
          img: PalaisMuze,
        },
        {
          id: 'disney',
          location: 'Disneyland',
          city: 'Paris',
          img: Disney,
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
                 {slide.location.split('').map(l => <span key={l}>{l}</span>)}
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

export default withNavigation(Paris);