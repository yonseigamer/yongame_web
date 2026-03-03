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
        image: 'images/planning/game_issue.webp',
      },
      {
        title: '정규활동 기획',
        description:
          '정규활동을 직접 기획해보는 활동을 통해 아이디어를 현실화시켜보는 경험을 할 수 있습니다. 성취감과 실무 감각을 기를 수 있는 기회입니다.',
        image: 'images/planning/regular_activity.webp',
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
  // --- 정규활동 ---
  {
    id: 1,
    title: '개강총회',
    category: 'regular',
    description:
      '연겜 한 학기의 시작을 알리는 활동입니다. 이번 학기 임원진을 소개하고 및 회칙 개정안을 고지합니다.',
    color: '#1766FF',
    image: 'images/regular/opening_meeting.webp',
  },
  {
    id: 2,
    title: '겜독',
    category: 'regular',
    description:
      '"게임을 인문학적으로 읽다" — 게임문화 동아리 연겜의 대표적인 게임 탐구 활동입니다. 참여자들은 게임을 사전에 플레이한 이후 강연자의 해당 게임과 관련한 강연을 듣고 토론에 참여합니다. 게임문화 동아리로서 다른 게임 동아리와 차별화되는 연겜의 가장 핵심적인 활동입니다.',
    color: '#8B5CF6',
    image: 'images/regular/gamedoc.webp',
  },
  {
    id: 3,
    title: '조겜대',
    category: 'regular',
    description:
      '"조구만 게임 대회"는 팀을 구성하여 소규모 게임들을 플레이하며 경쟁하는 가벼운 친목 활동입니다.',
    color: '#EC4899',
    image: 'images/regular/joegamedae.webp',
  },
  {
    id: 4,
    title: '기획국 주관활동',
    category: 'regular',
    description:
      '게임과 관련된 자유로운 아이디어를 바탕으로 기획국이 주도하여 콘텐츠를 기획·운영하는 활동입니다. 기획 아이디어 구상, 기획서 작성, 기획 구체화 회의 진행, 실제 활동 제작 및 진행까지 A부터 Z까지 전 과정을 기획국에서 전담하여 진행합니다.',
    color: '#F59E0B',
    image: 'images/regular/planning_organized.webp',
  },
  {
    id: 5,
    title: '뷰잉파티',
    category: 'regular',
    description:
      '부원들과 함께 한 곳에 모여 이스포츠 경기를 시청하는 활동입니다.',
    color: '#10B981',
    image: 'images/regular/viewing_party.webp',
  },
  {
    id: 6,
    title: '종강총회',
    category: 'regular',
    description:
      '한 학기를 마무리하며 다음 학기 임원진을 선출하고 방학학기 활동을 안내합니다.',
    color: '#6366F1',
    image: 'images/regular/ending_meeting.webp',
  },
  // --- 국별 활동 ---
  {
    id: 7,
    title: '게임 이슈 스터디',
    category: 'departmental',
    description:
      '게임과 관련된 주제를 자유롭게 선정하여 매주 정기적으로 발제 및 토론을 진행합니다. 게임 이슈 스터디를 통해 게임 관련 분석과 견해를 나눌 수 있습니다.',
    color: '#14B8A6',
    dept: '기획국',
    image: 'images/planning/game_issue.webp',
  },
  {
    id: 8,
    title: '정규활동 기획',
    category: 'departmental',
    description:
      '정규활동을 직접 기획해보는 활동을 통해 아이디어를 현실화시켜보는 경험을 할 수 있습니다. 성취감과 실무 감각을 기를 수 있는 기회입니다.',
    color: '#0EA5E9',
    dept: '기획국',
    image: 'images/planning/regular_activity.webp',
  },
  {
    id: 9,
    title: '카드뉴스',
    category: 'departmental',
    description:
      '누가 연겜의 활동을 묻거든 고개를 들어 카드뉴스를 보게 하라. 홍보국은 매주 연겜에서 진행되는 활동을 카드뉴스로 제작하고 있습니다. 연겜의 얼굴을 빛내주세요!',
    color: '#F97316',
    dept: '홍보국',
    image: 'images/pr/pr-1.webp',
  },
  {
    id: 10,
    title: '연겜 매거진',
    category: 'departmental',
    description:
      '평소 하고 싶었던 게임 이야기를 공유해보자! 게임과 관련된 주제를 선정하여 자유로운 형식으로 제작하는 매거진 활동을 진행하고 있습니다.',
    color: '#EF4444',
    dept: '홍보국',
    image: 'images/pr/pr-2.webp',
  },
  {
    id: 11,
    title: '포토샵 스터디',
    category: 'departmental',
    description:
      '포토샵을 처음 하신다고요? 그런 당신을 위해 준비했습니다! 매주 진행하는 포토샵 스터디를 통해 기본적인 기능을 배우고 나만의 디자인을 만들어보세요!',
    color: '#EC4899',
    dept: '홍보국',
    image: 'images/pr/pr-3.webp',
  },
  {
    id: 12,
    title: '프리미어 프로 스터디',
    category: 'departmental',
    description:
      '영상 편집, 기초부터 실전 꿀팁까지 제대로 배우고 싶다면? 프리미어 프로 스터디에서 툴 마스터는 물론, 서로의 피드백을 통해 퀄리티 높은 나만의 포트폴리오를 완성해 보세요!',
    color: '#8B5CF6',
    dept: '미디어국',
    image: 'images/media/media-2.webp',
  },
  {
    id: 13,
    title: '연겜소',
    image: 'images/media/media-1.webp',
    category: 'departmental',
    description:
      '총 상금과 자존심을 건 쇼츠 조회수 대결! 팀원들과 함께 최신 게임 영상을 제작해 푸짐한 상품을 쟁취하세요. 1분 미만의 짧은 승부, 여러분의 기획력과 편집 센스를 보여줄 때입니다.',
    color: '#6366F1',
    dept: '미디어국',
  },
  // --- 프로젝트 ---
  {
    id: 14,
    title: '연발컵',
    category: 'project',
    description:
      '연세대학교 발로란트 챔피언을 가리는 교내 최대의 발로란트 대회입니다. 연겜에서 기획하고 진행하며, 우승팀에게는 명예와 상금이 주어집니다.',
    color: '#EF4444',
    image: 'images/project/yonbal.webp',
  },
  {
    id: 15,
    title: '연겜 전시회',
    category: 'project',
    description:
      '연세대학교 내에서 진행한 연겜 전시회입니다. 1년동안 게임이 담고 있는 인문학과 철학에 대해 탐구한 결과물들을 전시회라는 형태로 대중들에게 선보입니다.',
    color: '#F59E0B',
    image: 'images/project/exhibition.webp',
  },
  {
    id: 16,
    title: '사이버 정기전',
    category: 'project',
    description:
      '연세대학교와 고려대학교의 스포츠 정기전을 사이버 공간으로 옮긴 대회입니다. 여러 이스포츠 종목을 바탕으로 연세대학교와 고려대학교의 게임 실력의 자웅을 겨룹니다.',
    color: '#1766FF',
    image: 'images/project/cyber.webp',
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
  startDate: '2026-03-03',
  endDate: '2026-03-16',
  formUrl: 'https://tally.so/r/J92xOd',
  instagramHandle: '@yonsei_yongame',
  instagramUrl: 'https://www.instagram.com/yonsei_yongame/',
  schedule: [
    { icon: '📢', label: '지원서 마감', date: '2026년 3월 10일(화) 23시 59분' },
    { icon: '📢', label: '(대면) 면접 기간', date: '2026년 3월 14일(토) ~ 2026년 3월 15일(일)' },
    { icon: '📢', label: '합격자 발표', date: '2026년 3월 16일(월)' },
    { icon: '📢', label: '첫 정규활동', date: '2026년 3월 18일(수) 18시 30분' },
    { icon: '📢', label: 'MT', date: '2026년 3월 21일(토) ~ 3월 22일(일)' },
  ],
  eligibility: [
    '2학기 이상 활동 가능한 학부생',
    '매주 수요일 오후 6시 30분 정규활동에 참여 가능한 학부생',
  ],
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
  address: '연세대학교 신촌캠퍼스 학생회관 지하 1층 B11-3',
  instagramUrl: 'https://www.instagram.com/yonsei_yongame/',
  instagramHandle: '@yonsei_yongame',
  youtubeUrl: 'https://www.youtube.com/@yonsei_yongame',
  youtubeHandle: '@yonsei_yongame',
};
