import { motion } from 'framer-motion';
import { scrollToSection } from '../../utils/smoothScroll';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="메인 배너">
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

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
          <span className={styles.scrollText}>SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
