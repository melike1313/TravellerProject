import React from "react";
import "../../App.css";
import "../Paris.css";
import ReactDOM from 'react-dom';
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import louvreImage from '../../images/Louvre.jpg';
import EyfelKulesi from '../../images/Eyfel.jpg';
import PalaisMuze from '../../images/Palais.jpg';
import Disney from '../../images/Disneyland.jpg';

class Paris extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
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
    if (!this.props.slides) {
      return;
    } 
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    if (!this.props.slides) {
      return null; // veya başka bir yedek bileşen döndürebilirsiniz
    } 
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) }, /*#__PURE__*/
      React.createElement("p", { className: "slider__top-heading" }, "Travelers"), /*#__PURE__*/
      React.createElement("div", { className: "slider__slides" },
      this.props.slides.map((slide, index) => /*#__PURE__*/
      React.createElement("div", {
        className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
        key: slide.location }, /*#__PURE__*/

      React.createElement("div", { className: "slider__slide-content" }, /*#__PURE__*/
      React.createElement("h3", { className: "slider__slide-subheading" }, slide.city || slide.location), /*#__PURE__*/
      React.createElement("h2", { className: "slider__slide-heading" },
      slide.location.split('')?.map(l => /*#__PURE__*/React.createElement("span", null, l))), /*#__PURE__*/

      React.createElement("p", { className: "slider__slide-readmore" }, "read more")), /*#__PURE__*/

      React.createElement("div", { className: "slider__slide-parts" },
      [...Array(this.IMAGE_PARTS).fill()]?.map((x, i) => /*#__PURE__*/
      React.createElement("div", { className: "slider__slide-part", key: i }, /*#__PURE__*/
      React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))), /*#__PURE__*/






      React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }), /*#__PURE__*/
      React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) })));


  }}


const slides = [
{
  location: 'Louvre Museum',
  city: 'Paris',
  img: louvreImage },

{
  location: 'Eiffel Tower',
  img: EyfelKulesi },

{
  location: 'Palais',
  city: 'Paris',
  img: PalaisMuze },

{
  location: 'Disneyland',
  city: 'Paris',
  img: Disney },
];



ReactDOM.render( /*#__PURE__*/React.createElement(Paris, { slides: slides }), document.querySelector('#app'));

export default Paris;