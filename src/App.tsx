import { motion } from "framer-motion";
import './index.css'
import {BsFillGeoAltFill} from 'react-icons/bs';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import small_logo from './assets/small_logo.svg';
import light_logo from './assets/light_logo.png';
import { images } from "./images-data";
import { djs } from "./djs-data";
import programa from './assets/programa.svg';
import map from './assets/map.jpeg';
import { sponsors } from "./sponsors-data";


const variants = {
  'zoom-in': {
    cursor: 'zoom-out',
    opacity: 1,
    scale: 1.5,
  },
  'zoom-out': {
    cursor: 'zoom-in',
    opacity: .9,
    scale: 1
  }
}

export default function App() {
  const [initialEnd, setInitialEnd] = useState(false);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLInputElement>(null) as MutableRefObject<HTMLDivElement>;
  const [scaled, setScaled] = useState(false);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    const timer = setTimeout(() => {
      setInitialEnd(true);
    }, 2200)
    return () => clearTimeout(timer)
  }, [])


  const header = {
    hidden: { opacity: 0, y: -64 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.2,
        duration: 1,
      }
    }
  }
  return (
    <motion.div className="main"
    style={{
      background: 'black',
      paddingBottom: 400
    }}
    >
      <motion.div
      initial={{
        background: 'radial-gradient(farthest-side ellipse at top left,rgb(0,0,0),rgb(0,0,0) 30%,transparent 80%),radial-gradient(farthest-side ellipse at top right,rgb(0,0,0),rgb(0,0,0) 30%, transparent 80%), black'
      }}
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
      }}
      animate= {{
        background: 'radial-gradient(farthest-side ellipse at top left,rgb(73,163,184),rgb(126,111,170) 30%,transparent 80%),radial-gradient(farthest-side ellipse at top right,rgb(230,174,60),rgb(157,57,58) 30%, transparent 80%), black',
      }}
      transition={{
        delay: 2.2,
        duration: 1
      }}
      >
          <motion.svg
      style={{
        position: 'absolute',
        maxWidth: '50%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
      }}
      initial= {{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
      }}
      transition={{
        delay: 2.2,
        duration: 1,
      }}
      viewBox="350 195 600 580"
      xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            duration: 1,
            ease: "easeInOut",
            fillOpacity: {delay: 1, duration: 1}
          }}
          fill="#E6AE3C"
          stroke="#E6AE3C"
          strokeWidth={1}
          strokeDasharray="0 1"
          d="M401.65,221.64v10.37h-40.3v29.34h39.11v10.37h-39.11v38.37h40.3v10.37H350.4v-98.81H401.65z"
        />
        <motion.path
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            duration: 1,
            ease: "easeInOut",
            fillOpacity: {delay: 1, duration: 1}
          }}
          fill="#E6AE3C"
          stroke="#E6AE3C"
          strokeWidth={1}
          strokeDasharray="0 1"
          d="M421.8,221.64h10.96v88.44h27.26v10.37H421.8V221.64z"
        />
        <motion.path
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            duration: 1,
            ease: "easeInOut",
            fillOpacity: {delay: 1, duration: 1}
          }}
          fill="#E6AE3C"
          stroke="#E6AE3C"
          strokeWidth={1}
          strokeDasharray="0 1"
          d="M526.09,221.64v10.37H485.8v29.34h39.11v10.37H485.8v38.37h40.29v10.37h-51.25v-98.81H526.09z"
        />
        <motion.path
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            duration: 1,
            ease: "easeInOut",
            fillOpacity: {delay: 1, duration: 1}
          }}
          fill="#E6AE3C"
          stroke="#E6AE3C"
          strokeWidth={1}
          strokeDasharray="0 1"
          d="M621.79,229.79v13.63c-3.95-3.95-8.24-7.01-12.89-9.18c-5.63-2.57-11.31-3.85-17.04-3.85
	c-11.36,0-20.81,3.98-28.37,11.93c-7.56,7.95-11.33,17.7-11.33,29.26c0,12.44,4.12,22.27,12.37,29.48s17.41,10.81,27.48,10.81
	c6.32,0,12.44-1.53,18.37-4.59c4.15-2.07,7.95-4.84,11.41-8.29v13.63c-8.99,6.42-18.91,9.63-29.78,9.63
	c-14.61,0-26.79-4.89-36.51-14.67c-9.73-9.78-14.6-21.82-14.6-36.15c0-14.71,4.91-26.96,14.74-36.74
	c9.83-9.78,22.15-14.67,36.96-14.67C603.47,220.01,613.19,223.27,621.79,229.79z"
        />
        <motion.path
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            duration: 1,
            ease: "easeInOut",
            fillOpacity: {delay: 1, duration: 1}
          }}
          fill="#E6AE3C"
          stroke="#E6AE3C"
          strokeWidth={1}
          strokeDasharray="0 1"
          d="M690.23,232.01h-24v88.44h-10.96v-88.44h-24v-10.37h58.96V232.01z"
        />
        <motion.path
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            duration: 1,
            ease: "easeInOut",
            fillOpacity: {delay: 1, duration: 1}
          }}
          fill="#E6AE3C"
          stroke="#E6AE3C"
          strokeWidth={1}
          strokeDasharray="0 1"
          d="M705.04,221.64h15.85c10.67,0,18.66,1.83,24,5.48c7.21,4.84,10.81,12.15,10.81,21.92
	c0,7.61-2.3,13.93-6.89,18.96c-4.59,5.04-10.59,7.8-18,8.3l31.4,44.14h-13.33l-30.08-43.26H716v43.26h-10.96V221.64z M716,232.01
	v35.41h6.97c6.82,0,12.15-1.58,16-4.74c3.85-3.16,5.77-7.61,5.77-13.33c0-6.72-2.62-11.56-7.85-14.52
	c-3.36-1.87-8.09-2.81-14.22-2.81H716z"
        />
        <motion.path
          initial={{ pathLength: 0, fillOpacity: 0, scale: 0.5 }}
          animate={{ pathLength: 1, fillOpacity: 1, scale: 1}}
          transition={{
            duration: 2,
            ease: "easeInOut",
            fillOpacity: {delay: 1, duration: 1}
          }}
          fill="#D13A3B"
          stroke="#D13A3B"
          strokeWidth={1}
          strokeDasharray="0 1"
          d="M869.07,310.41c-10.94,10.78-24.35,16.16-40.24,16.16s-29.3-5.39-40.23-16.16
	c-10.94-10.77-16.41-24.16-16.41-40.15c0-16.1,5.5-29.51,16.49-40.23c10.99-10.72,24.37-16.08,40.15-16.08s29.16,5.36,40.16,16.08
	c10.99,10.72,16.48,24.13,16.48,40.23C885.47,286.26,880,299.64,869.07,310.41z M860.17,238.43c-8.6-8.7-19.04-13.06-31.34-13.06
	s-22.74,4.36-31.33,13.06c-8.6,8.7-12.89,19.31-12.89,31.83c0,12.52,4.3,23.13,12.89,31.83c8.59,8.7,19.04,13.05,31.33,13.05
	s22.74-4.35,31.34-13.05c8.6-8.7,12.89-19.32,12.89-31.83C873.06,257.75,868.77,247.14,860.17,238.43z"
        />
        <motion.circle
          cx="919.12"
          cy="264.06"
          r="10.48"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            duration: 2,
            ease: "easeInOut",
            fillOpacity: {delay: 2, duration: 1}
          }}
          fill="#E6AE3C"
          stroke="#E6AE3C"
          strokeWidth={1}
          strokeDasharray="0 1"
        />
        <motion.circle
          cx="908.06"
          cy="221.29"
          r="19.08"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1.1, fillOpacity: 1}}
          transition={{
            duration: 2,
            ease: "easeInOut",
            fillOpacity: {delay: 2, duration: 1}
          }}
          fill="transparent"
          stroke="#D13A3B"
          strokeWidth={5.5}
        />
        <motion.polyline
          initial={{ pathLength: 0, fillOpacity: 0}}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="#7E6FAA"
          strokeWidth={22}
          strokeDasharray="0 1"
          points="360.33,563.28 360.33,373 603.21,373"
        />
        <motion.line
          initial={{ pathLength: 0, fillOpacity: 0}}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="#7E6FAA"
          strokeWidth={22}
          strokeDasharray="0 1"
          x1="492.44"
          y1="453.67"
          x2="360.33"
          y2="453.67"
        />
        <motion.line
          initial={{ pathLength: 0, fillOpacity: 0}}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            delay: .4,
            duration: 1,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="#7E6FAA"
          strokeWidth={22}
          strokeDasharray="0 1"
          x1="540.9"
          y1="563.28"
          x2="540.9"
          y2="373"
        />
        <motion.path
          initial={{ pathLength: 0, fillOpacity: 0}}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            delay: .8,
            duration: 1,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="#7E6FAA"
          strokeWidth={22}
          strokeDasharray="0 1"
          d="M668.5,374.17c0,0,70.48-5.85,70.5,44.17c0.02,57.67-70.5,48.17-70.5,48.17"
        />
        <motion.polyline
          initial={{ pathLength: 0, fillOpacity: 0}}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            delay: .8,
            duration: 1,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="#7E6FAA"
          strokeWidth={22}
          strokeDasharray="0 1"
          points="683.67,468.14 743.5,553.17 885.98,553.17 "
        />
        <motion.line
          initial={{ pathLength: 0, fillOpacity: 0}}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            delay: .8,
            duration: 1,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="#7E6FAA"
          strokeWidth={22}
          strokeDasharray="0 1"
          x1="659"
          y1="362.81"
          x2="659"
          y2="563.53"
        />
        <motion.polyline
          initial={{ pathLength: 0, fillOpacity: 0}}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            delay: .8,
            duration: 1,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="#7E6FAA"
          strokeWidth={22}
          strokeDasharray="0 1"
          points="797.89,553.17 797.89,373.96 885.98,373.96 "
        />
        <motion.line
          initial={{ pathLength: 0, fillOpacity: 0}}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            delay: .8,
            duration: 1,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="#7E6FAA"
          strokeWidth={20}
          strokeDasharray="0 1"
          x1="797.89"
          y1="453.67"
          x2="883.7"
          y2="453.67"
        />
        <motion.path
          initial={{ pathLength: 0, fillOpacity: 0}}
          animate={{ pathLength: 1, fillOpacity: 1}}
          transition={{
            delay: .4,
            duration: 1,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="#49A3B8"
          strokeWidth={20}
          strokeDasharray="0 1"
          d="M360.33,585.27v104.84c0,0,1.44,56.22,61.78,56.22s59.66-56.22,59.66-56.22V585.27"
        />
        <motion.path
        initial={{ pathLength: 0, fillOpacity: 0}}
        animate={{ pathLength: 1, fillOpacity: 1}}
        transition={{
          delay: .6,
          duration: 1,
          ease: "easeInOut",
        }}
        fill="none"
        stroke="#49A3B8"
        strokeWidth={20}
        strokeDasharray="0 1"
        d="M540.49,585.27l0,22.5c0,0,1.41,56.22,60.29,56.22S659,607.78,659,607.78l0-22.5"
      />
      </motion.svg>
      </motion.div>
    <div className="content">
    <motion.header
    className="header"
    variants={header}
    initial='hidden'
    animate='show'
    >
      <motion.img
    initial= {{
      top: -100,
      opacity: 0,
    }}
    animate= {{
      top: 12,
      opacity: 1
    }}
    transition={{
      delay: 2.2,
      duration: 1,
    }}
      src={small_logo} className="small-logo"></motion.img>
      <motion.div
      className="podlozhka"
      style={{
        display: "block",
        position: 'absolute',
        left: 0,
        top: -100,
        width: '12%',
        aspectRatio: 1,
        opacity: 1
      }}
      animate={{
        top: 0,
      }}
      transition={{
        delay: 2.2,
        duration: 1,
      }}
      >
      </motion.div>
      <div
      style={{
        display: 'flex',
      }}
      >
      <motion.a
      href="#program"
      whileHover={{
        scale: 1.2,
        color: '#801856',
        cursor: 'poiner'
      }}
      style={{
        padding: 10,
      }}
      >
        Программа
      </motion.a>
      <motion.a
      href="#map"
      whileHover={{
        scale: 1.2,
        color: '#801856',
        cursor: 'poiner',
      }}
      style={{
        padding: 10,
      }}
      >
        Карта
      </motion.a>
      <motion.a
      whileHover={{
        scale: 1.2,
        color: '#801856',
        cursor: 'pointer'
      }}
      style={{
        padding: 10,
      }}
      >
        Купить билет
      </motion.a>
      <motion.a
      href="#contacts"
      whileHover={{
        scale: 1.2,
        color: '#801856',
        cursor: 'poiner'
      }}
      style={{
        padding: 10,
      }}
      >
        Контакты
      </motion.a>
      </div>  
    </motion.header>
      <motion.div
      style={{
        padding: '175px 0',
      }}
      initial={{
        y: 100,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        delay: 2.2,
        duration: 1
      }}
      >
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <p style={{fontSize: '0.8rem'}}>― НЕЗАБЫВАЕМОЕ ПРИКЛЮЧЕНИЕ</p>
        <p style={{fontSize: '2rem', marginBottom: '5rem'}}>
          <span className="main-phrase">ELECTRO FUTURE</span>
          ФЕСТИВАЛЬ ЭЛЕКТРОННОЙ МУЗЫКИ
        </p>
        <p style={{fontSize: '1.2rem', letterSpacing: 0.5, margin: 0}}>
          Готовьтесь к незабываемому фестивалю, который состоится 26-27 июня 2023 года.
        </p>
        <p style={{fontSize: '1.2rem', letterSpacing: 0.5}}>
          <span style={{marginRight: '0.5rem'}}><BsFillGeoAltFill/></span>Серпуховский район, парк-отель "Остров Русский".
        </p>
        </div>
      <div
      >
      <motion.a
      href="#more1"
      whileHover={{
        scale: 1.1,
        borderColor: 'rgb(89,19,61)',
        color: '#b80c73',
      }}
      whileTap={{
        scale: 0.9,
        borderColor: '#fff',
        color: '#fff',
      }}
      style={{
        background: 'rgba(0,0,0,0)',
        display: 'inline-block',
        border: '3px solid rgba(255,255,255,.5)',
        padding: '10px 20px',
        marginTop: '3rem',
      }}
      >
        Узнать подробнее <HiOutlineArrowNarrowRight style={{verticalAlign: 'text-bottom', marginLeft: '0.5rem'}}/>
      </motion.a>
      </div>
      </motion.div>
      <motion.div className="slogan"
      initial={{
        y: 100,
        opacity: 0
      }}
      whileInView= {initialEnd ? {
        y: 0,
        opacity: 1
      } : {}}
      viewport={{once: true}}
      transition={{
        duration: 1
      }}
      >
        <div className="slogan-item">
          <span style={{color: 'rgba(73,163,184)', fontWeight: 'bold', fontSize: '1.3rem'}}>СЛУШАЙ!</span>
          <p style={{opacity: .8}}>Слушай и наслаждайся музыкой любимых диджеев</p>
        </div>
        <div className="slogan-item">
        <span style={{color: 'rgb(126,111,170)', fontWeight: 'bold', fontSize: '1.3rem'}}>ОТДЫХАЙ!</span>
        <p style={{opacity: .8}}>Отдыхай на&nbsp;живописном пляже парка развлечений</p>
        </div>
        <div className="slogan-item">
        <span style={{color: 'rgb(209,58,59)', fontWeight: 'bold', fontSize: '1.3em'}}>ИГРАЙ!</span>
        <p style={{opacity: .8}}>Играй, соревнуйся и&nbsp;получай классные призы</p>
        </div>
        <div className="slogan-item">
        <span style={{color: 'rgb(230,174,60)', fontWeight: 'bold', fontSize: '1.3rem'}}>ЗАЖИГАЙ!</span>
        <p style={{opacity: .8}}>Зажигай на тацполе и&nbsp;поражай всех своими крутыми движениями</p>
        </div>
      </motion.div>
      <motion.div className="welcome" id='more1'
      initial={{
        y: 100,
        opacity: 0
      }}
      whileInView= {initialEnd ? {
        y: 0,
        opacity: 1
      } : {}}
      viewport={{once: true}}
      transition={{
        duration: 1
      }}
      >
        <img src="https://res2.weblium.site/res/5f2bcb6ba22b3300210d7d5d/5f2be68c49c50b0021dccc5d_optimized_674_c674x837-0x0?nowebp"></img>
        <div>
        <h1>Добро пожаловать в будущее!</h1>
        <p style={{fontSize: '1.2em'}}>Более 5 тысяч людей со всей России соберутся, чтобы потусоваться под музыку лучших диджеев мира!</p>
        <p style={{fontSize: '0.8em', opacity: .7}}>Около 50 лучших диджеев (включая таких суперзвезд, как Sidewalks & Skeletons, Plenka, CHVRN и многих других) играют на четырех невероятных открытых сценах.
          Наша вечеринка известна своим потрясающим оформлением сцены и впечатляющей визуальной постановкой. Приходи и посмотри.</p>
        <motion.a
      href="#dj"
      whileHover={{
        scale: 1.1,
        borderColor: 'rgb(89,19,61)',
        color: '#b80c73',
      }}
      whileTap={{
        scale: 0.9,
        borderColor: '#fff',
        color: '#fff',
      }}
      style={{
        background: 'rgba(0,0,0,0)',
        display: 'inline-block',
        border: '3px solid rgba(255,255,255,.5)',
        padding: '10px 20px',
        marginTop: '3rem',
      }}
      >
        Узнать больше <HiOutlineArrowNarrowRight style={{verticalAlign: 'text-bottom', marginLeft: '0.5rem'}}/>
      </motion.a>
        </div>
      </motion.div>
      <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
      }}
      initial={{
        y: 100,
        opacity: 0
      }}
      whileInView= {initialEnd ? {
        y: 0,
        opacity: 1
      } : {}}
      viewport={{once: true}}
      transition={{
        duration: 1,
      }}
      >
        <h1 style={{margin: 0}}>
          Присоединяйся к вечеринке!
        </h1>
        <p style={{margin: '1rem 0 4rem 0'}}>Приготовьтесь к самой потрясающей вечеринке вашего лета:</p>
      </motion.div>
      <motion.div className="carousel"
      ref={carousel}
      whileTap={{cursor: 'grabbing'}}
      initial={{
        y: 100,
        opacity: 0
      }}
      whileInView= {initialEnd ? {
        y: 0,
        opacity: 1
      } : {}}
      viewport={{once: true}}
      transition={{
        duration: 1,
      }}
      >
        <motion.div drag='x' dragConstraints={{right: 181, left: -width}} className="inner-carousel">
          {images.map((image, idx) => (
            <motion.div key={idx} className="item">
            <img key={idx} src={image.src}/>
            <h1 style={{fontSize: '1.5rem'}}>{image.title}</h1>
            <p style={{marginTop: '1rem', opacity: .7}}>{image.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      </div>
      <motion.div className="stars"
      initial={{
        opacity: 0
      }}
      whileInView= {initialEnd ? {
        opacity: 1
      } : {}}
      viewport={{once: true}}
      transition={{
        delay: 1,
        duration: 1,
      }}
      >
        <motion.div className="inner-stars"
        initial= {{scale: 0.5, opacity: 0}}
        whileInView= {initialEnd ? {
          scale: 1,
          opacity: 1
        } : {}}
        viewport={{once: true}}
      transition={{
        delay: 1.2,
        duration: 1,
      }}
        >
        <div className="inner-stars-text">
        <p>Танцы на песчаном пляже под звездами — это</p>
        <p>НЕЗАБЫВАЕМО!</p>
        </div>
        </motion.div>
      </motion.div>
      <div className="content">
        <motion.div className="dj-wrapper" id="dj"
          initial={{
            y: 100,
            opacity: 0
          }}
          whileInView= {initialEnd ? {
            y: 0,
            opacity: 1
          } : {}}
          viewport={{once: true}}
          transition={{
            duration: 1,
          }}
        >
          <div className="dj-header"
          >
            <h1>EDM ЗВЕЗДЫ</h1>
            <p>Главные исполнители<br/>2023 года.</p>
          </div>
          <div className="dj">
            {djs.map((item, idx) => (
              <div key={idx} className="dj-item">
              <img src={item.src}></img>
                <div className="dj-info">
                <h2>{item.name}</h2>
                <p>{item.descr}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div className="line"
        initial={{
          width: 0
        }}
        whileInView= {initialEnd ? {
          width: '100%'
        } : {}}
        viewport={{once: true}}
        transition={{
          duration: 1,
        }}
        >
        </motion.div>
        <motion.div className="dj-wrapper" id="programa"
        initial={{
          y: 100,
          opacity: 0
        }}
        whileInView= {initialEnd ? {
          y: 0,
          opacity: 1
        } : {}}
        viewport={{once: true}}
        transition={{
          duration: 1,
        }}
        >
        <motion.div className="dj-header" id="program">
        <h1>ПРОГРАММА ФЕСТИВАЛЯ</h1>
        </motion.div>
        <img src={programa} className="programa"></img>
        </motion.div>
        <motion.h1 id="map"
        style={{marginTop: 50, fontSize: '2rem', fontFamily: 'Futura'}}
        initial={{
          y: 100,
          opacity: 0
        }}
        whileInView= {initialEnd ? {
          y: 0,
          opacity: 1
        } : {}}
        viewport={{once: true}}
        transition={{
          duration: 1,
        }}
        >КАРТА ФЕСТИВАЛЯ</motion.h1>
      </div>
      <motion.div
      initial={{
        y: 100,
        opacity: 0
      }}
      whileInView= {initialEnd ? {
        y: 0,
        opacity: 1
      } : {}}
      viewport={{once: true}}
      transition={{
        duration: 1,
      }}
      >
      <motion.img className="map"
      initial={{scale: 1}}
      animate={scaled ? 'zoom-in' :  'zoom-out'}
      variants={variants}
      src={map}
      onClick={() => setScaled(prev => !prev)}
      transition={{
        duration: 1
      }}
      >
      </motion.img>
      </motion.div>
      <div className="content">
        <motion.div className="sponsors"
        initial={{
          y: 100,
          opacity: 0
        }}
        whileInView= {initialEnd ? {
          y: 0,
          opacity: 1
        } : {}}
        viewport={{once: true}}
        transition={{
          duration: 1,
        }}
        >
          <div className="sponsors-title">
            <h1 style={{fontFamily: 'Futura'}}>СПОНСОРЫ</h1>
            <p style={{opacity: .8}}>Мы благодарим наших спонсоров за&nbsp;поддержку фестиваля</p>
          </div>
          <div className="sponsors-items">
            {sponsors.map((item, idx) => (
              <div  key={idx} style={{border: 'solid 1px rgba(255,255,255,.7)'}}>
              <img src={item} width='100%' style={{opacity: .7}}></img>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div className="contacts" id="contacts"
        initial={{
          y: 100,
          opacity: 0
        }}
        whileInView= {initialEnd ? {
          y: 0,
          opacity: 1
        } : {}}
        viewport={{once: true}}
        transition={{
          duration: 1,
        }}
        >
        <YMaps>
        <Map
        // width='100%'
        height={299}
          defaultState={{
            center: [54.87912977586543,37.30044177774038],
            zoom: 10,
          }}
        >
          <Placemark geometry={[54.87912977586543,37.30044177774038]} />
        </Map>
      </YMaps>
      <div className="contacts-info">
        <h1 style={{fontFamily: 'Futura', marginTop: 0, lineHeight: '1.5rem'}}>Как нас найти</h1>
        <p style={{margin: 0}}>Готовьтесь к вечеринке! Если у вас есть вопросы, вы хотите сделать предзаказ билетов на Electro Future 2023 или обсудить варианты сотрудничества, позвоните нам.</p>
        <h2 style={{fontFamily: 'Futura', marginBottom: 0}}>Адрес:</h2>
        <p style={{margin: 0}}>Московская область, городской округ Серпухов, деревня Дракино</p>
        <h2 style={{fontFamily: 'Futura', marginBottom: 0}}>Контакты:</h2>
        <p style={{margin: 0}}>+7 (999) 871 50 91</p>
      </div>
      </motion.div>
      </div>
      <footer className="footer">
        <img src={light_logo} width={100} style={{opacity: .8}}></img>
      <div
      style={{
        display: 'flex',
      }}
      >
      <motion.a
      href="#program"
      whileHover={{
        scale: 1.2,
        color: '#801856',
        cursor: 'poiner'
      }}
      style={{
        padding: 10,
      }}
      >
        Программа
      </motion.a>
      <motion.a
      href="#map"
      whileHover={{
        scale: 1.2,
        color: '#801856',
        cursor: 'poiner',
      }}
      style={{
        padding: 10,
      }}
      >
        Карта
      </motion.a>
      <motion.a
      whileHover={{
        scale: 1.2,
        color: '#801856',
        cursor: 'pointer'
      }}
      style={{
        padding: 10,
      }}
      >
        Купить билет
      </motion.a>
      <motion.a
      href="#contacts"
      whileHover={{
        scale: 1.2,
        color: '#801856',
        cursor: 'poiner'
      }}
      style={{
        padding: 10,
      }}
      >
        Контакты
      </motion.a>
      </div> 
      </footer>
    </motion.div>
  );
}
