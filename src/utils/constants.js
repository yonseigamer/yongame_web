// ===== About Us Sections (scroll-spy) =====
export const ABOUT_SECTIONS = [
  {
    id: 'intro',
    name: '동아리 소개',
    description:
      '연겜은 연세대학교를 대표하는 게임 문화 동아리입니다. 게임을 사랑하는 사람이 모여 게임에 대해 의견을 나누기도 하고, 행사를 열기도 하며, 함께 즐거움을 공유하기도 합니다. 게임의 무궁무진한 가능성, 그것을 탐구하는 건 저희 연겜입니다.',
    activities: [],
  },
  {
    id: 'planning',
    name: '기획국',
    nameEn: 'Planning',
    icon: '📋',
    description:
      '기획국은 연겜에서 진행되는 활동을 직접 기획하는 데 목적을 두고 있는 부서입니다. 기획서를 작성하여 자신의 활동 아이디어를 실현할 수 있는 기회를 제공합니다.',
    activities: [
      {
        title: '게임 이슈 스터디',
        description:
          '게임과 관련된 주제를 자유롭게 선정하여 매주 정기적으로 발제 및 토론을 진행합니다. 게임 이슈 스터디를 통해 게임 관련 분석과 견해를 나눌 수 있습니다.',
      },
      {
        title: '정규활동 기획',
        description:
          '정규활동을 직접 기획해보는 활동을 통해 아이디어를 현실화시켜보는 경험을 할 수 있습니다. 성취감과 실무 감각을 기를 수 있는 기회입니다.',
      },
    ],
  },
  {
    id: 'pr',
    name: '홍보국',
    nameEn: 'PR',
    icon: '📢',
    description:
      '연겜의 얼굴, 홍보국! 게임 문화 동아리 연겜에서 진행되는 활동을 홍보하는 데 목적을 두고 있는 부서입니다. 더 나아가 게임 문화의 발전에 이바지하는 데 의의를 두고 있습니다. 디자인 생초보도 가능! 게임을 좋아하고 디자인에 관심이 있다면 홍보국으로 오세요!',
    activities: [
      {
        title: '카드뉴스',
        description:
          '누가 연겜의 활동을 묻거든 고개를 들어 카드뉴스를 보게 하라. 홍보국은 매주 연겜에서 진행되는 활동을 카드뉴스로 제작하고 있습니다. 연겜의 얼굴을 빛내주세요!',
        image: 'images/pr/pr-1.webp',
      },
      {
        title: '연겜 매거진',
        description:
          '평소 하고 싶었던 게임 이야기를 공유해보자! 게임과 관련된 주제를 선정하여 자유로운 형식으로 제작하는 매거진 활동을 진행하고 있습니다. 본인의 스타일이 담긴 매거진을 만들어 디자인 실력과 게임 지식 모두 뽐내보도록 합시다!',
        image: 'images/pr/pr-2.webp',
      },
      {
        title: '포토샵 스터디',
        description:
          '포토샵을 처음 하신다고요? 그런 당신을 위해 준비했습니다! 매주 진행하는 포토샵 스터디를 통해 기본적인 기능을 배우고 나만의 디자인을 만들어보세요!',
        image: 'images/pr/pr-3.webp',
      },
    ],
  },
  {
    id: 'media',
    name: '미디어국',
    nameEn: 'Media',
    icon: '🎬',
    description:
      '영상으로 이야기를 만들고 싶다면 미디어국! Premiere Pro, After Effects 등 영상 편집 능력이 있으면 좋아요. 대회 하이라이트, 브이로그 등 촬영과 편집을 통해 연겜의 순간들을 기록합니다.',
    activities: [
      {
        title: '프리미어 프로 스터디',
        description:
          '영상 편집, 기초부터 실전 꿀팁까지 제대로 배우고 싶다면? 프리미어 프로 스터디에서 툴 마스터는 물론, 서로의 피드백을 통해 퀄리티 높은 나만의 포트폴리오를 완성해 보세요!',
        image: 'images/media/media-1.webp',
      },
      {
        title: '연겜소',
        description:
          '총 상금과 자존심을 건 쇼츠 조회수 대결! 팀원들과 함께 최신 게임 영상을 제작해 푸짐한 상품을 쟁취하세요. 1분 미만의 짧은 승부, 여러분의 기획력과 편집 센스를 보여줄 때입니다.',
        image: 'images/media/media-2.webp',
      },
    ],
  },
];

// ===== Activity Categories =====
export const ACTIVITY_CATEGORIES = [
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
  formUrl: '#',
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
    name: 'YouTube',
    url: 'https://www.youtube.com/@yonsei_yongame',
  },
];

// ===== Club Contact Info =====
export const CLUB_INFO = {
  name: 'YONGAME',
  fullName: '연세대학교 게임 문화 동아리 연겜',
  email: 'yonseigamer@gmail.com',
  phone: '010-7939-5286(회장 류재아)',
  address: '연세대학교 신촌캠퍼스 학생회관 지하 1층',
  instagramUrl: 'https://www.instagram.com/yonsei_yongame/',
  instagramHandle: '@yonsei_yongame',
  youtubeUrl: 'https://www.youtube.com/@yonsei_yongame',
  youtubeHandle: '@yonsei_yongame',
};
