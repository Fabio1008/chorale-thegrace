import "./Contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaAt, FaPhoneFlip, FaLocationDot } from "react-icons/fa6";
import Form from "../Form/Form"
import { useTranslation } from "react-i18next";

const Contact = () => {
  const ref = useRef();

  const isInview = useInView(ref, { margin: "-100px", once: true});

  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

      const { t } = useTranslation();
      const { h1, title1, title2, title3 } = t("contact");

  return (
    <motion.div
      ref={ref}
      className="container"
      variants={variants}
      initial="initial"
      whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>{h1}</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>{title1}</h2>
          <p className="row">
            <span>
              <FaAt />
            </span>
            choralethegrace@gmail.com
          </p>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>{title2}</h2>
          <p className="row">
            <span>
              <FaLocationDot />
            </span>
            10 rue magenta 68100 Mulhouse (68), France
          </p>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>{title3}</h2>
          <p className="row">
            <span>
              <FaPhoneFlip />
            </span>
            06 28 66 14 42
          </p>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}>
          <svg width="45px" height="45px" viewBox="0 0 48 48" fill="none">
            <path />
            <g id="Shopicon">
              <motion.path
                fill="none"
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={isInview && { pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M24,44c5.343,0,10.365-2.08,14.143-5.858l-2.829-2.828C32.292,38.336,28.274,40,24,40c-8.822,0-16-7.178-16-16
		S15.178,8,24,8s16,7.178,16,16c0,2.206-1.794,4-4,4s-4-1.794-4-4v-8h-4v1.079C26.822,16.397,25.459,16,24,16c-4.418,0-8,3.582-8,8
		s3.582,8,8,8c2.394,0,4.536-1.057,6.003-2.723C31.47,30.942,33.611,32,36,32c4.411,0,8-3.589,8-8c0-11.028-8.972-20-20-20
		S4,12.972,4,24S12.972,44,24,44z M24,28c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S26.206,28,24,28z"
              />
            </g>
          </svg>
        </motion.div>
        <Form />
      </div>
    </motion.div>
  );
};

export default Contact;
