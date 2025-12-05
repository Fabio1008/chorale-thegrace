import "./Social.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";


const Social = () => {

const social = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://twitter.com/",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    id: 5,
    name: "Linkedin",
    url: "https://www.linkedin.com/",
    icon: <FaLinkedinIn />,
  },
  {
    id: 6,
    name: "Github",
    url: "https://github.com/franckick0909/",
    icon: <FaGithub />,
  },
    ];
    
const socialVariants = {
    initial: {
    y: -100,
    opacity: 0,
    },
    animate: {
    y: 0,
    opacity: 1,
    transition: {
        stiffness: 100,
        type: "spring",
        damping: 10,
        staggerChildren: 0.1,
        delayChildren: 0.2,
    },
    },
};

    return (
        <motion.div className="social"
          variants={socialVariants}
          initial="initial"
          whileInView="animate">
            {
                social.map((social) => (
                    <motion.a
                        className="social__link"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={social.id}
                        variants={socialVariants}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ y: 0, scale: 0.95 }}>
                        {social.icon}
                    </motion.a>
                ))
            }
        </motion.div>
    );
};

export default Social;