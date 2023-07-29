import React from 'react';
import Button from '../Button';
import gif from '../../assets/redar_2x.gif';

import css from './style.module.scss'

const WelcomeSection = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.heading_lineStart}>
          Stop your &nbsp;
          <span className={css.heading_lineEnd}>
            phone from being spied on
          </span>
        </h1>
        <div className={css.description}>
          Try Clario, a smart anti-spy app that effectively protects your privacy.
        </div>
        <Button className={css.button_main}>
          Protect me now
        </Button>
        <div className={css.logo_group}>
          <span className={css.apple_logo}>iOS</span>
          <span className={css.desktop_logo}>macOS, Windows</span>
        </div>
        <div className={css.image_container}>
          <img className={css.animated_image} src={gif} alt="Dog is moving" />
        </div>
        <div>
          <h3 className={css.list_title}>The anti-spy Clario app can:</h3>
          <div>
            <p className={css.list_item}>reveal hidden spying apps</p>
            <p className={css.list_item}>stop silent location tracking</p>
            <p className={css.list_item}>avoid social media hacks</p>
            <p className={css.list_item}>provide 24/7 expert security help</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default WelcomeSection;
