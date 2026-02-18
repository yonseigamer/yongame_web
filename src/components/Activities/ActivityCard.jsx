import { motion } from 'framer-motion';
import styles from './ActivityCard.module.css';

const BASE = import.meta.env.BASE_URL;

function ActivityCard({ activity, index = 0 }) {
  const hasImage = !!activity.image;

  return (
    <motion.article
      className={`${styles.card} ${hasImage ? styles.cardWithImage : ''}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
    >
      {hasImage ? (
        <img
          src={`${BASE}${activity.image}`}
          alt={activity.title}
          className={styles.bgImage}
          loading="lazy"
        />
      ) : (
        <div
          className={styles.bg}
          style={{
            background: `linear-gradient(135deg, ${activity.color}CC 0%, ${activity.color}88 50%, ${activity.color}44 100%)`,
          }}
        />
      )}

      <div className={styles.pattern} />

      <div className={styles.titleArea}>
        <h3 className={styles.title}>{activity.title}</h3>
        <span className={styles.badge}>{getCategoryLabel(activity.category)}</span>
      </div>

      <div className={styles.overlay}>
        <h3 className={styles.overlayTitle}>{activity.title}</h3>
        <p className={styles.overlayDesc}>{activity.description}</p>
      </div>
    </motion.article>
  );
}

function getCategoryLabel(category) {
  const map = {
    regular: '정규활동',
    departmental: '국별 활동',
    project: '프로젝트',
  };
  return map[category] || category;
}

export default ActivityCard;
