import React from "react";
import WatchSVG from '../../assets/watch.svg';
import SearchSVG from "../../assets/search.svg";
import ProtectSVG from "../../assets/protect.svg";
import ArrowRightSVG from "../../assets/arr_right.svg";
import ArrowLeftSVG from "../../assets/arr_left.svg";
import Slider from "react-slick";
import styles from "./InfoSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function InfoSlider() {
    const PrevArrow = ({ currentSlide, slideCount, ...props }) => 
        <button {...props}>
            <img src={ArrowLeftSVG} alt="ArrowpervSVG" className="slider__arrow_prev" />
        </button>;

    const NextArrow = ({currentSlide, slideCount, ...props}) =>
        <button {...props}> 
            <img src={ArrowRightSVG} alt="ArrownextSVG" className="slider__arrow_next" />
        </button>;

    const slider_settings = {
        className: styles.slider,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        slide: "div",
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...slider_settings}>
            <div className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                    <img src={WatchSVG} alt="WatchSVG" className="slider__svg" />
                    <span>Высокая и оперативная скорость обработки заявки</span>
                </div>
            </div>

            <div className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                    <img src={SearchSVG} alt="SearchSVG" className="slider__svg" />
                    <span>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</span>
                </div>
            </div>

            <div className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                    <img src={ProtectSVG} alt="ProtectSVG" className="slider__svg" />
                    <span>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</span>
                </div>
            </div>

            <div className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                    <img src={WatchSVG} alt="WatchSVG" className="slider__svg" />
                    <span>Высокая и оперативная скорость обработки заявки</span>
                </div>
            </div>

            <div className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                    <img src={SearchSVG} alt="SearchSVG" className="slider__svg" />
                    <span>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</span>
                </div>
            </div>

            <div className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                <img src={ProtectSVG} alt="ProtectSVG" className="slider__svg" />
                <span>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</span>
                </div>
            </div>
        </Slider>
    );
}