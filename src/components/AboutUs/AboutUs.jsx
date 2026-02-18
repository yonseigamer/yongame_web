import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ABOUT_SECTIONS } from '../../utils/constants';
import styles from './AboutUs.module.css';

const BASE = import.meta.env.BASE_URL;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

function AboutUs() {
  const [activeId, setActiveId] = useState(ABOUT_SECTIONS[0].id);
  const sectionRefs = useRef({});
  const isClickScrolling = useRef(false);

  const registerRef = useCallback((id, el) => {
    if (el) sectionRefs.current[id] = el;
  }, []);

  useEffect(() => {
    const observers = [];
    const ids = ABOUT_SECTIONS.map((s) => s.id);

    ids.forEach((id) => {
      const el = sectionRefs.current[id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isClickScrolling.current) {
            setActiveId(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleTabClick = (id) => {
    setActiveId(id);
    isClickScrolling.current = true;

    const el = sectionRefs.current[id];
    if (el) {
      const headerHeight = parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--header-height'),
        10
      ) || 72;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <section className={styles.section} id="about" aria-label="About Us">
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className={styles.sectionTag} variants={fadeUp} custom={0}>
            ABOUT US
          </motion.h2>
        </motion.div>

        <div className={styles.layout}>
          {/* Sticky sidebar */}
          <nav className={styles.sidebar} aria-label="About Us 네비게이션">
            {ABOUT_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                className={`${styles.sidebarTab} ${activeId === sec.id ? styles.sidebarTabActive : ''}`}
                onClick={() => handleTabClick(sec.id)}
                aria-current={activeId === sec.id ? 'true' : undefined}
              >
                {sec.name}
              </button>
            ))}
          </nav>

          {/* Content area */}
          <div className={styles.content}>
            {ABOUT_SECTIONS.map((sec, idx) => (
              <div
                key={sec.id}
                ref={(el) => registerRef(sec.id, el)}
                className={styles.contentSection}
                data-section={sec.id}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className={styles.sectionTitle}>
                    {sec.icon && <span className={styles.sectionIcon}>{sec.icon}</span>}
                    <h3 className={styles.sectionName}>{sec.name}</h3>
                    {sec.nameEn && (
                      <span className={styles.sectionNameEn}>{sec.nameEn}</span>
                    )}
                  </div>

                  <p className={styles.sectionDesc}>{sec.description}</p>

                  {sec.activities && sec.activities.length > 0 && (
                    <div className={styles.activityGrid}>
                      {sec.activities.map((act, actIdx) => (
                        <motion.div
                          key={act.title}
                          className={styles.activityCard}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.5, delay: actIdx * 0.1 }}
                        >
                          {act.image && (
                            <div className={styles.activityImageWrap}>
                              <img
                                src={`${BASE}${act.image}`}
                                alt={act.title}
                                className={styles.activityImage}
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className={styles.activityBody}>
                            <h4 className={styles.activityTitle}>{act.title}</h4>
                            <p className={styles.activityDesc}>{act.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
