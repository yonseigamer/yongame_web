/**
 * Smooth scroll to a target element by its ID
 * @param {string} targetId - The ID of the target element
 * @param {number} offset - Optional offset from the top (default: header height)
 */
export function scrollToSection(targetId, offset = 72) {
  const element = document.getElementById(targetId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Check if recruitment period is currently active
 * @param {string} startDate - ISO date string
 * @param {string} endDate - ISO date string
 * @returns {boolean}
 */
export function isRecruitmentActive(startDate, endDate) {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999);
  return now >= start && now <= end;
}
