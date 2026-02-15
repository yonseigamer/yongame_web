import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../utils/smoothScroll';
import styles from './Header.module.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId) => {
    scrollToSection(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="홈으로 이동"
        >
          YONGAME
        </button>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`} aria-label="메인 내비게이션">
          {NAV_LINKS.map((link) => (
            <button
              key={link.targetId}
              className={styles.navLink}
              onClick={() => handleNavClick(link.targetId)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay backdrop */}
      {mobileMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Header;
