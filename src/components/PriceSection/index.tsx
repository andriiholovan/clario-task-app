import React from 'react';
import * as icons from '../../assets/svg';
import { Button, Timer } from '../common';

import css from './style.module.scss'

type Advantage = {
  icon: string;
  title: string;
};

const ADVANTAGES: Advantage[] = [
  { icon: icons.Device_count_3, title: 'Protection for 3 devices' },
  { icon: icons.Shield, title: 'Anti-spy checkup' },
  { icon: icons.AntiSpy, title: 'Unlimited access to anti-spying tools' },
  { icon: icons.Support, title: '24/7 help from security experts' },
];

const PriceSection = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>
          Start your spy-free week for as low as
        </h2>
        <div className={css.price_container}>
          <div className={css.timer}>
            <span className={css.timer_title}>Special offer valid for</span>
            <div>
              <span className={css.timer_value}>
                <Timer initMinute={30} initSeconds={0} />
              </span>
              <span className={css.timer_unit}>min</span>
            </div>
          </div>
          <div className={css.price}>
            <div className={css.price_wrapper}>
              <span className={css.price_currency}>$</span>
              <span className={css.price_value}>2</span>
              <span className={css.price_float_value}>99</span>
              <span className={css.price_period}> /7 days</span>
            </div>
          </div>
          <div className={css.advantages_container}>
            <h3 className={css.advantages_title}>
              What you get:
            </h3>
            <div className={css.advantage_container}>
              {ADVANTAGES.map(advantage => (
                <div key={advantage.title} className={css.advantage_wrapper}>
                  <div className={css.advantage_image}>
                    <img src={advantage.icon} alt={advantage.title}/>
                  </div>
                  <p className={css.advantage_title}>{advantage.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={css.price_group}>
            <Button className={css.price_button}>Try for $2.99</Button>
            <p className={css.price_disclaimer}>
              By clicking above, you agree to try 7 days of Clario for $2.99 as a special offer. Your subscription will renew for $39.9/month every 2 months. Cancel anytime or manage your subscription in your Clario account.
            </p>
            <div>
              <div className={css.price_disclaimer_wrapper}>
                <div className={css.price_disclaimer_image}>
                  <img src={icons.Money_back} alt="30-day money-back guarantee"/>
                </div>
                <p className={css.price_disclaimer_title}>30-day money-back guarantee</p>
              </div>
              <div className={css.price_disclaimer_wrapper}>
                <div className={css.price_disclaimer_image}>
                  <img src={icons.Downloads} alt="100.000 + downloads"/>
                </div>
                <p className={css.price_disclaimer_title}>100.000 + downloads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
