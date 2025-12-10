import "./Slider.scss";
import img1 from "../../assets/img/cover.webp";
import img2 from "../../assets/img/cover1.webp";
import img3 from "../../assets/img/cover2.webp";
import img4 from "../../assets/img/cover3.webp";
import scroll from "../../assets/img/scroll.png";
import { motion } from "framer-motion";
import Social from "../Social/Social";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";


const Slider = () => {
  const buttonVariants = {
    animate: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: "-50%",
      x: "-20%", // changé de 60% à -30%
    },
    animate: {
      opacity: 1,
      y: "-50%",
      x: "-50%",

      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
        delay: 0.4,
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const textItemVariants = {
    initial: {
      opacity: 0,
      y: "-100%",
      x: "-50%",
    },
    animate: {
      opacity: 1,
      y: "-50%",
      x: "-50%",
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
        delay: 0.4,
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const {t} = useTranslation();
  const { text1, text2, text3, btn1, btn2 } = t("slider_text1");
  const { text4 } = t("slider_text2");
  const { text5 } = t("slider_text3");

  return (
    <div>
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        <SwiperSlide className="swiperSlide">
          <motion.img
            src={img1}
            alt="coffee drink"
            className="img-swiper"
            initial={{ scale: 1, rotate: 0 }}
            whileInView={{ scale: 1.1, rotate: "2deg" }}
            transition={{ duration: 5 }}
          />
          <motion.div
            className="text"
            variants={textVariants}
            initial="initial"
            whileInView="animate">
            <Social />
            <motion.h2 className="name">CHORALE THE GRACE</motion.h2>
            <motion.img
              src={scroll}
              alt="image scroll"
              className="scroll"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <motion.img
            src={img2}
            alt="portable computer"
            className="img-swiper"
            initial={{ scale: 1, rotate: 0 }}
            whileInView={{ scale: 1.1, rotate: "2deg" }}
            transition={{ duration: 5 }}
          />
          <motion.div
            className="text"
            variants={textVariants}
            initial="initial"
            whileInView="animate">
            <motion.h2 className="title1">
               <motion.h2 className="name">Animation, messse, bapteme, mariage</motion.h2>
              {text1}
              <motion.span> {text2}</motion.span>
              <motion.span> {text3}</motion.span>
            </motion.h2>
            <motion.div className="buttons" variants={textVariants}>
              <motion.a href="#Contact" className="btn btn-1">
                {btn1}
              </motion.a>
              <motion.a href="#Portfolio" className="btn btn-2">
                {btn2}
              </motion.a>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <motion.img
            src={img3}
            alt="portable computer"
            className="img-swiper"
            initial={{ scale: 1, rotate: 0 }}
            whileInView={{ scale: 1.1, rotate: "2deg" }}
            transition={{ duration: 5 }}
          />
          <motion.div
            className="text"
            variants={textItemVariants}
            initial="initial"
            whileInView="animate">
            <motion.h2 className="title2">
              <motion.h2 className="name">Nous faisons des animations pendants nos sorties.</motion.h2>
              {text4}
            </motion.h2>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <motion.img
            src={img4}
            alt="earth planet code"
            className="img-swiper"
            initial={{ scale: 1, rotate: 0 }}
            whileInView={{ scale: 1.1, rotate: "2deg" }}
            transition={{ duration: 5 }}
          />
          <div className="text">
            <motion.h3
              initial={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                delay: 0.4,
              }}
              whileInView={{ opacity: 1, scale: 1.4 }}>
              {text5}
            </motion.h3>
            <motion.h3 className="name">La chorale The Grace vous accueille à Mulhouse pour des répétitions, messe et temps de louange.</motion.h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
