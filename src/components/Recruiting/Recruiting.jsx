import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { RECRUITMENT, CLUB_INFO, SOCIAL_LINKS } from '../../utils/constants';
import { isRecruitmentActive } from '../../utils/smoothScroll';
import styles from './Recruiting.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

function Recruiting() {
  const [iframeError, setIframeError] = useState(false);

  const isActive = useMemo(
    () => isRecruitmentActive(RECRUITMENT.startDate, RECRUITMENT.endDate),
    []
  );

  return (
    <section className={styles.section} id="recruiting" aria-label="Recruiting">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className={styles.tag} variants={fadeUp} custom={0}>
            Recruiting
          </motion.h2>
        </motion.div>

        {/* Body: single column centered */}
        <div className={styles.body}>
          {/* Instagram embed */}
          <motion.div
            className={styles.instagramWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!iframeError ? (
              <div className={styles.iframeContainer}>
                <iframe
                  src="https://www.instagram.com/yonsei_yongame/embed"
                  className={styles.iframe}
                  title="연겜 인스타그램"
                  loading="lazy"
                  allowTransparency="true"
                  onError={() => setIframeError(true)}
                />
              </div>
            ) : (
              <InstagramFallback />
            )}
          </motion.div>

          {/* Description + CTA */}
          <motion.div
            className={styles.ctaArea}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className={styles.ctaDesc}>
              리크루팅에 관한 추가설명 / 지원 관련 설명
            </p>

            {isActive ? (
              <a
                href={RECRUITMENT.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                지금 지원하기
              </a>
            ) : (
              <div className={styles.ctaDisabledArea}>
                <button className={styles.ctaButtonDisabled} disabled>
                  지금 지원하기
                </button>
                <p className={styles.ctaMicrocopy}>
                  현재 모집 기간이 아닙니다.{' '}
                  <a
                    href={RECRUITMENT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaLink}
                  >
                    {RECRUITMENT.instagramHandle}
                  </a>
                  을 팔로우하고 다음 모집 소식을 받아보세요!
                </p>
              </div>
            )}
          </motion.div>

          {/* Details footer section */}
          <motion.div
            className={styles.details}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className={styles.detailsTitle}>{CLUB_INFO.fullName}</h4>
            <p className={styles.detailsSubtitle}>
              연세대학교 신촌캠퍼스 학생회관 3층, 301-335
            </p>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <div className={styles.detailIconWrap}>
                  <MailIcon />
                </div>
                <span className={styles.detailLink}>{CLUB_INFO.email}</span>
              </div>
            </div>

            {/* Social icons row */}
            <div className={styles.detailsSocial}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.detailsSocialLink}
                  aria-label={`${link.name} 방문`}
                >
                  {link.name === 'Instagram' && <InstagramIcon size={20} />}
                  {link.name === 'YouTube' && <YouTubeIcon />}
                  {link.name === 'LinkedIn' && <LinkedInIcon />}
                  {link.name === 'X' && <XIcon />}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===== Icon Components ===== */

function InstagramFallback() {
  return (
    <div className={styles.fallback}>
      <div className={styles.fallbackIcon}>
        <InstagramIcon size={48} />
      </div>
      <p className={styles.fallbackHandle}>{RECRUITMENT.instagramHandle}</p>
      <p className={styles.fallbackText}>
        연겜의 최신 소식을 인스타그램에서 확인하세요
      </p>
      <a
        href={RECRUITMENT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.fallbackLink}
      >
        Instagram에서 보기
      </a>
    </div>
  );
}

function InstagramIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default Recruiting;
