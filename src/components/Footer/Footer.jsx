import { SOCIAL_LINKS, RECRUITMENT } from '../../utils/constants';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>YONGAME</span>
          <p className={styles.signature}>
            연세대학교 게임 문화 동아리, YONGAME
          </p>
        </div>

        <div className={styles.social}>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={`${link.name} 방문`}
            >
              {link.name === 'Instagram' && <InstagramIcon />}
              {link.name === 'YouTube' && <YouTubeIcon />}
            </a>
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} YONGAME. All Rights Reserved.
          </p>
          <p className={styles.contact}>
            <a
              href={RECRUITMENT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              {RECRUITMENT.instagramHandle}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

export default Footer;
