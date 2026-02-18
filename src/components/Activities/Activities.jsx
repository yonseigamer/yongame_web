import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACTIVITY_CATEGORIES, ACTIVITIES } from '../../utils/constants';
import ActivityCard from './ActivityCard';
import styles from './Activities.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

function Activities() {
  const [activeFilter, setActiveFilter] = useState('regular');

  const filteredActivities = useMemo(() => {
    return ACTIVITIES.filter((a) => a.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className={styles.section} id="activities" aria-label="Activities">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className={styles.tag} variants={fadeUp} custom={0}>
            Activities
          </motion.h2>
          <motion.p className={styles.subtitle} variants={fadeUp} custom={0.2}>
            연겜의 활동들은 게임에 관한 정말 재미있는 활동이 많아요!
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className={styles.filters}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {ACTIVITY_CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat.id}
              className={`${styles.filterBtn} ${
                activeFilter === cat.id ? styles.filterBtnActive : ''
              }`}
              onClick={() => setActiveFilter(cat.id)}
              variants={fadeUp}
              custom={0.1 * i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Card grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))
            ) : (
              <motion.div
                className={styles.emptyState}
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <span className={styles.emptyIcon}>🎮</span>
                <p className={styles.emptyText}>
                  해당 카테고리에 활동이 없습니다.
                </p>
                <button
                  className={styles.emptyBtn}
                  onClick={() => setActiveFilter('all')}
                >
                  전체 활동 보기
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Activities;
