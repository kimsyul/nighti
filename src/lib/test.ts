export type Question = {
  id: number;
  question: string;
  options: {
    label: string;
    value: string;
  }[];
};

export const questions: Question[] = [
  {
    id: 1,
    question: '오늘 기분은 어떤가요?',
    options: [
      { label: '😄 신나요!', value: 'positive' },
      { label: '🥹 조금 지쳤어요..', value: 'negative' },
      { label: '🙂 평온해요', value: 'neutral' },
      { label: '😡 짜증나요!', value: 'negative' },
      { label: '🥳 너무 행복해요!', value: 'positive' },
    ],
  },
  {
    id: 2,
    question: '오늘 누구와 함께하고 싶으신가요?',
    options: [
      { label: '🧍 혼자만의 시간', value: 'alone' },
      { label: '👫 친구와 나들이', value: 'together' },
      { label: '👩‍❤️‍👨 연인과 데이트', value: 'together' },
      { label: '🧑‍🧑‍🧒 가족과 소중한 시간', value: 'family' },
      { label: '🐾 반려동물이랑 산책', value: 'pet' },
    ],
  },
  {
    id: 3,
    question: '어떤 야경이 끌리시나요?',
    options: [
      { label: '🐟 물멍 뷰', value: 'water' },
      { label: '⛰️ 높은 곳에서 보는 전망', value: 'high' },
      { label: '🌃 반짝이는 도심 건축물', value: 'building' },
      { label: '🇰🇷 고즈넉한 전통 건축물', value: 'tradition' },
      { label: '🍃 초록초록한 공원 풍경', value: 'park' },
    ],
  },
  {
    id: 4,
    question: '어떻게 이동하실 예정인가요?',
    options: [
      { label: '🚘 자가용', value: 'car' },
      { label: '🚉 대중교통', value: 'public' },
      { label: '👟 뚜벅이', value: 'walk' },
    ],
  },
  {
    id: 5,
    question: '입장료가 있어도 괜찮으신가요?',
    options: [
      { label: '🙌 상관 없어요!', value: 'all' },
      { label: '💸 무료 장소만', value: 'free' },
    ],
  },
];
