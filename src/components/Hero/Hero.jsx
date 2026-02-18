import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../../utils/smoothScroll';
import styles from './Hero.module.css';

const heroBackground = `${import.meta.env.BASE_URL}images/hero/hero-1.webp`;

function Hero() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    let timer = null;
    let hasScrolled = false;

    const startTimer = () => {
      timer = setTimeout(() => {
        if (!hasScrolled) setShowScroll(true);
      }, 10000);
    };

    const handleScroll = () => {
      hasScrolled = true;
      setShowScroll(false);
      if (timer) clearTimeout(timer);
    };

    startTimer();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={styles.hero}
      id="hero"
      aria-label="메인 배너"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Background overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          YONSEI GAME CULTURE CLUB
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          YONGAME
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          게임을 사랑하는 연세인들의 놀이터
        </motion.p>

        <motion.button
          className={styles.cta}
          onClick={() => scrollToSection('recruiting')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          지금 지원하기
        </motion.button>

        {/* Scroll indicator: appears after 10s idle, hides on scroll */}
        <AnimatePresence>
          {showScroll && (
            <motion.div
              className={styles.scrollIndicator}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.scrollMouse}>
                <div className={styles.scrollWheel} />
              </div>
              <span className={styles.scrollText}>SCROLL</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Hero;
