import React from 'react';
import SliderCarousel from 'react-slick';
import SLIDES from '../../ReviewsSection/slides';
import * as icons from '../../../assets/svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from './style.module.scss'

const customArrowStyles = {
  zIndex: 1,
  position: 'absolute',
  background: '#FFFFFF',
  borderRadius: '50%',
  padding: '10px 12px',
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.10)',
}

type ArrowProps = {
  style?: React.CSSProperties | any;
  onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = ({ style, onClick }) => {
  return (
    <div
      style={{ ...style, ...customArrowStyles, bottom: '-25px', left: '80px', }}
      onClick={onClick}
    >
      <img src={icons.Arrow_left} alt=""/>
    </div>
  );
}

const NextArrow: React.FC<ArrowProps> = ({ style, onClick }) => {
  return (
    <div
      style={{ ...style, ...customArrowStyles, bottom: '-25px', left: '140px', }}
      onClick={onClick}
    >
      <img src={icons.Arrow_right} alt=""/>
    </div>
  );
}

const Slider = () => {
  const SETTINGS = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <SliderCarousel {...SETTINGS}>
      {SLIDES.map(slide => (
        <div key={slide.text}>
          <div className={`${css.slide} ${css[`slide_${slide.uid}`]}`}>
            <div className={css.slide_wrapper}>
              <div className={css.slide_header_wrapper}>
                <img src={slide.icon} alt={slide.text} />
                <p className={css.slide_text}>{slide.text}</p>
              </div>
              <p className={css.slide_footer}>{slide.name}</p>
            </div>
          </div>
        </div>
      ))}
    </SliderCarousel>
  )
};

export default Slider;
