import { motion } from 'framer-motion';
import DeptCards from './DeptCards';
import styles from './AboutUs.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

function AboutUs() {
  return (
    <section className={styles.section} id="about" aria-label="About Us">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className={styles.tag} variants={fadeUp} custom={0}>
            ABOUT US
          </motion.h2>
        </motion.div>

        {/* Vision statement */}
        <motion.div
          className={styles.visionBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className={styles.vision} variants={fadeUp} custom={0.2}>
            연겜은 이런 웹사이트 만드는 동아리가 아니라 게임 문화 연구 동아리이며
            연겜 회장 류재아는 발로란트 플레티넘 찍고 싶습니다.
          </motion.p>
        </motion.div>

        {/* Department cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <DeptCards />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
