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
    question: '당신에게 오늘은 어떤 날인가요?',
    options: [
      { label: '😄 정말 활기찬 날이에요!', value: 'positive' },
      { label: '🥹 지치고 힘든 날이에요..', value: 'negative' },
      { label: '🙂 평화로운 하루네요', value: 'neutral' },
      { label: '😡 너무 화가 나는 하루예요', value: 'negative' },
      { label: '🥳 기쁜 날이에요', value: 'positive' },
    ],
  },
  {
    id: 2,
    question: '누구와 함께 시간을 보내실건가요?',
    options: [
      { label: '🧍 혼자만의 시간을 보낼거에요', value: 'alone' },
      { label: '👫 친구와 함께 시간을 보낼거에요', value: 'together' },
      { label: '👩‍❤️‍👨 연인과 데이트 할거에요', value: 'together' },
      { label: '🧑‍🧑‍🧒 가족과 좋은 시간을 보낼거에요', value: 'family' },
      { label: '🐾 반려동물과 시간을 보낼거에요', value: 'pet' },
    ],
  },
  {
    id: 3,
    question: '어떤 종류의 야경을 보고 싶으신가요?',
    options: [
      { label: '🐟 물멍하고 싶어요', value: 'water' },
      { label: '⛰️ 높은 곳에서 내려다보는 야경을 보고 싶어요', value: 'high' },
      { label: '🌃 반짝반짝 외관이 빛나는 건물을 보고 싶어요', value: 'building' },
      { label: '🇰🇷 전통 건축물을 보고 싶어요', value: 'tradition' },
      { label: '🍃 초록초록한 공원의 풍경을 보고 싶어요', value: 'park' },
    ],
  },
  {
    id: 4,
    question: '어떤 이동수단을 이용할 예정이신가요?',
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
      { label: '💵 네. 유료 장소만 추천받고 싶어요', value: 'money' },
      { label: '💸 무료 장소만 추천받고 싶어요', value: 'free' },
      { label: '🙌 상관 없어요!', value: 'all' },
    ],
  },
];
