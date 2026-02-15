// ===== Department Data =====
// "어느 국에 들어가야 할까?" 관점에서 필요 역량 중심으로 설명
export const DEPARTMENTS = [
  {
    id: 'planning',
    name: '기획국',
    nameEn: 'Planning',
    description:
      '대회와 행사를 직접 설계하고 싶다면 기획국! 체계적인 사고력과 일정 관리 능력이 있다면 딱이에요. 게임 룰에 대한 이해도가 높고, 사람들과 소통하며 프로젝트를 이끄는 걸 좋아하는 분을 찾습니다.',
    icon: '📋',
  },
  {
    id: 'pr',
    name: '홍보국',
    nameEn: 'PR',
    description:
      '연겜의 얼굴을 디자인하고 싶다면 홍보국! Adobe Photoshop, Illustrator 등 그래픽 툴 활용 능력이 필요해요. 인스타그램 콘텐츠 기획부터 디자인까지, 비주얼 감각과 트렌드 센스를 발휘할 수 있습니다.',
    icon: '📢',
  },
  {
    id: 'media',
    name: '미디어국',
    nameEn: 'Media',
    description:
      '영상으로 이야기를 만들고 싶다면 미디어국! Premiere Pro, After Effects 등 영상 편집 능력이 있으면 좋아요. 대회 하이라이트, 브이로그 등 촬영과 편집을 통해 연겜의 순간들을 기록합니다.',
    icon: '🎬',
  },
];

// ===== Activity Categories =====
export const ACTIVITY_CATEGORIES = [
  { id: 'all', label: '전체' },
  { id: 'regular', label: '정규활동' },
  { id: 'departmental', label: '국별 활동' },
  { id: 'project', label: '프로젝트' },
];

// ===== Activities Data =====
export const ACTIVITIES = [
  {
    id: 1,
    title: '연낳대',
    category: 'project',
    description:
      '연세대학교 내 최대 규모 교내 e스포츠 대회. 리그 오브 레전드, 발로란트 등 다양한 종목으로 진행됩니다.',
    color: '#1766FF',
  },
  {
    id: 2,
    title: '이낳대',
    category: 'project',
    description:
      '이화여대와 함께하는 연합 e스포츠 대회. 양교 학생들의 열정이 가득한 교류전입니다.',
    color: '#8B5CF6',
  },
  {
    id: 3,
    title: '연토브리그',
    category: 'project',
    description:
      '연세대학교 교내 토너먼트 리그. 시즌제로 운영되며 매 학기 새로운 챔피언이 탄생합니다.',
    color: '#EC4899',
  },
  {
    id: 4,
    title: 'YGF',
    category: 'project',
    description:
      'Yongame Game Festival. 연겜이 주최하는 게임 문화 축제로, 다양한 이벤트와 부스가 운영됩니다.',
    color: '#F59E0B',
  },
  {
    id: 5,
    title: '연발컵',
    category: 'project',
    description:
      '연세대학교 발로란트 컵. 발로란트 종목에 특화된 교내 대회입니다.',
    color: '#EF4444',
  },
  {
    id: 6,
    title: '사연전',
    category: 'project',
    description:
      '4개 대학 연합 e스포츠 대회. 여러 대학의 게임 동아리들이 모여 실력을 겨루는 대규모 교류전입니다.',
    color: '#10B981',
  },
  {
    id: 7,
    title: '정기 게임 모임',
    category: 'regular',
    description:
      '매주 정기적으로 모여 다양한 게임을 함께 즐기는 시간! 보드게임부터 PC 게임까지 장르를 가리지 않습니다.',
    color: '#6366F1',
  },
  {
    id: 8,
    title: '게임 문화 세미나',
    category: 'regular',
    description:
      '게임 산업 트렌드, e스포츠 생태계, 게임 디자인 등 게임 문화 전반에 대해 탐구하는 세미나입니다.',
    color: '#0EA5E9',
  },
  {
    id: 9,
    title: '연겜 매거진',
    category: 'departmental',
    description:
      '홍보국에서 제작하는 연겜의 공식 매거진. 게임 문화 트렌드, 부원 인터뷰, 대회 리뷰 등 다양한 콘텐츠를 디자인하고 발행합니다.',
    color: '#F97316',
  },
  {
    id: 10,
    title: '게임 이슈 스터디',
    category: 'departmental',
    description:
      '기획국에서 주관하는 게임 이슈 스터디. 최신 게임 산업 트렌드, e스포츠 이슈 등을 함께 탐구하고 토론합니다.',
    color: '#14B8A6',
  },
  {
    id: 11,
    title: '연겜소',
    category: 'departmental',
    description:
      '미디어국에서 제작하는 연겜의 영상 콘텐츠 시리즈. 대회 하이라이트, 활동 브이로그, 부원 인터뷰 등 연겜의 순간들을 영상으로 기록합니다.',
    color: '#8B5CF6',
  },
];

// ===== Navigation Links =====
export const NAV_LINKS = [
  { label: 'ABOUT US', targetId: 'about' },
  { label: 'Activities', targetId: 'activities' },
  { label: 'Recruiting', targetId: 'recruiting' },
];

// ===== Recruitment Config =====
export const RECRUITMENT = {
  startDate: '2026-03-01',
  endDate: '2026-03-21',
  formUrl: '#', // placeholder - 실제 Google Forms URL로 교체
  instagramHandle: '@yonsei_yongame',
  instagramUrl: 'https://www.instagram.com/yonsei_yongame/',
};

// ===== Social Links =====
export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yonsei_yongame/',
  },
  {
    name: 'LinkedIn',
    url: '#', // placeholder URL
  },
  {
    name: 'X',
    url: '#', // placeholder URL
  },
];

// ===== Club Contact Info =====
export const CLUB_INFO = {
  name: 'YONGAME',
  fullName: '연세대학교 중앙 게임 문화 동아리 연겜',
  email: 'yongame@yonsei.ac.kr', // placeholder
  instagramUrl: 'https://www.instagram.com/yonsei_yongame/',
  instagramHandle: '@yonsei_yongame',
  youtubeUrl: 'https://www.youtube.com/@yonsei_yongame', // placeholder
  youtubeHandle: '@yonsei_yongame',
};
