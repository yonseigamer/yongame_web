import { motion } from 'framer-motion';
import styles from './ActivityCard.module.css';

function ActivityCard({ activity }) {
  return (
    <motion.article
      className={styles.card}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
    >
      {/* Background layer with gradient */}
      <div
        className={styles.bg}
        style={{
          background: `linear-gradient(135deg, ${activity.color}CC 0%, ${activity.color}88 50%, ${activity.color}44 100%)`,
        }}
      />

      {/* Pattern overlay for visual interest */}
      <div className={styles.pattern} />

      {/* Title always visible */}
      <div className={styles.titleArea}>
        <h3 className={styles.title}>{activity.title}</h3>
        <span className={styles.badge}>{getCategoryLabel(activity.category)}</span>
      </div>

      {/* Hover overlay with description */}
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
