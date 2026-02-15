import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DEPARTMENTS } from '../../utils/constants';
import styles from './DeptCards.module.css';

function DeptCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.wrapper}>
      {/* 3 cards in a row */}
      <div className={styles.cardRow}>
        {DEPARTMENTS.map((dept, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.button
              key={dept.id}
              className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`${dept.name} 부서 선택`}
              aria-pressed={isActive}
            >
              <span className={styles.cardIcon}>{dept.icon}</span>
              <span className={styles.cardName}>{dept.name}</span>
              <span className={styles.cardNameEn}>{dept.nameEn}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Description below cards */}
      <div className={styles.descriptionArea}>
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            className={styles.description}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {DEPARTMENTS[activeIndex].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DeptCards;
