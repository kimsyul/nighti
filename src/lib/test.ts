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
    question: '조용한 밤, 좋아하는 노래를 들으며 걷고 있어요. 그때 떠오르는 생각은?',
    options: [
      { label: '🌙 고요하니 너무 좋다..', value: 'I' },
      { label: '🫶 이런 순간, 누군가와 나누고 싶어', value: 'E' },
    ],
  },
  {
    id: 2,
    question: '산책길에 밤하늘을 올려다봤을 때, 당신이 가장 먼저 느끼는 건?',
    options: [
      { label: '🌠 무수히 많은 별에 감탄해요', value: 'S' },
      { label: '💭 괜히 이 길의 끝엔 뭔가 있을 것 같아요', value: 'N' },
    ],
  },
  {
    id: 3,
    question: '야경 명소에서 사진 찍으려는 줄이 길게 늘어져 있어요. 당신은 어떻게 하나요?',
    options: [
      { label: '🕰️ 줄 서는 시간이 아까워서 다른 곳으로 가요', value: 'T' },
      { label: '📸 예쁜 사진을 위해서라면 기다릴 수 있어요', value: 'F' },
    ],
  },
  {
    id: 4,
    question: '지나가던 길목에서 예쁜 야경 스팟을 발견했어요. 당신은 어떻게 하나요?',
    options: [
      { label: '📝 지금은 가는 길이 있으니까, 다음에 꼭 다시 오려고 기록해둬요', value: 'J' },
      { label: '🚶 와.. 너무 예쁘다! 바로 가봐요', value: 'P' },
    ],
  },
  {
    id: 5,
    question: '조용한 공원 벤치에 혼자 앉아 있을 때, 당신은?',
    options: [
      { label: '🌿 음악 들으며 나만의 시간을 즐겨요', value: 'I' },
      { label: '📱 이 풍경을 누군가에게 보여주고 싶어져요', value: 'E' },
    ],
  },
  {
    id: 6,
    question: '가로등 불빛 아래 그림자가 길게 늘어졌어요. 그때 드는 생각은?',
    options: [
      { label: '🌕 와… 지금 좀 감성 있는데?', value: 'S' },
      { label: '🎬 내가 영화 속 장면에 들어온 것 같아!', value: 'N' },
    ],
  },
  {
    id: 7,
    question: '친구가 "야경 명소 좀 추천해줘!" 라고 한다면?',
    options: [
      { label: '📈 덜 붐비고 가까운 곳 위주로 알려줘요', value: 'T' },
      { label: '📸 내가 감동받았던 곳을 추천해요', value: 'F' },
    ],
  },
  {
    id: 8,
    question: '야경 보러 나가는 날 아침, 당신은?',
    options: [
      { label: '📅 오늘 갈 루트랑 시간을 다 정해둬요', value: 'J' },
      { label: '🌀 분위기 보면서 즉흥으로 움직일 예정이에요', value: 'P' },
    ],
  },
  {
    id: 9,
    question: '밤이 깊어질수록 당신은?',
    options: [
      { label: '😌 괜히 생각이 많아져 나 자신과 대화를 해요', value: 'I' },
      { label: '📞 마음을 나눌 누군가가 떠올라 연락을 해봐요', value: 'E' },
    ],
  },
  {
    id: 10,
    question: '야경을 찍는데 사진이 너무 어둡게 나와요. 이럴 때 당신이라면?',
    options: [
      { label: '📷 카메라 설정을 바꿔보고 그래도 안되면 안 찍어요', value: 'T' },
      { label: '🌌 어두워도 그 순간을 남기고 싶어서 그냥 찍어요', value: 'F' },
    ],
  },
  {
    id: 11,
    question: '야경을 볼 때 당신의 머릿속은?',
    options: [
      { label: '📎 오늘 있었던 일들이 하나씩 정리돼요', value: 'S' },
      { label: '💭 우주에 있는 나의 모습을 상상해요', value: 'N' },
    ],
  },
  {
    id: 12,
    question: '이 테스트를 하게 된 이유, 굳이 하나 꼽자면?',
    options: [
      { label: '🪞 나에 대해 조금 더 알고 싶어서요', value: 'F' },
      { label: '🌃 나한테 어울리는 야경 명소를 추천받고 싶어서요', value: 'T' },
    ],
  },
];

export type Types = {
  id: string;
  title: string;
  mbti: string[];
  description: string;
  features: string[];
  keywords: string[];
};

export const types: Types[] = [
  {
    id: 'mercury',
    title: '🧭 흐름을 좇는 감성 방랑자',
    mbti: ['ENFP', 'ENTP'],
    description:
      '즉흥적인 감각과 낭만을 가진 당신은 자유로운 흐름을 즐기는 탐험가예요. 밤공기, 조명, 분위기… 그날의 기분이 길을 정하죠.',
    features: ['즉흥적인 경로 선택', '분위기에 민감', '우연한 발견을 즐김'],
    keywords: ['강변 산책로', '조용한 골목길', '우연히 만나는 뷰'],
  },
  {
    id: 'venus',
    title: '💗 감탄을 나누는 따뜻한 동행자',
    mbti: ['ESFJ', 'ENFJ'],
    description:
      '함께일 때 빛나는 당신은 야경의 감동을 누군가와 공유할 때 가장 행복해져요. 사람과 풍경 모두에게 따뜻한 시선을 건네는 타입이에요.',
    features: ['감탄 표현을 잘함', '사람과의 순간을 소중히 여김', '분위기 공유에 진심'],
    keywords: ['벤치 있는 공원', '커플 산책로', '야경 카페'],
  },
  {
    id: 'earth',
    title: '🌿 루틴 속 위로받는 조용한 정리러',
    mbti: ['ISFJ', 'ISTJ'],
    description:
      '정리와 안정의 에너지를 가진 당신은 걷는 그 자체에서 위로를 받아요. 익숙한 길에서 마음을 다독이고, 조용한 공간에서 쉼을 찾죠.',
    features: ['익숙한 길 선호', '감정 정리에 걷기를 활용함', '조용한 공간 선호'],
    keywords: ['동네 공원', '아파트 뒷길', '가로등 낮은 골목'],
  },
  {
    id: 'mars',
    title: '🔋 반짝이는 순간을 사랑하는 에너지 러버',
    mbti: ['ESTP', 'ISTP'],
    description:
      '생동감 넘치는 에너지로 밤을 즐기는 당신은 찰나의 순간을 사랑해요. 사진 찍고, 리듬 타고, 지금 이 순간이 가장 소중하죠.',
    features: ['감각적 자극에 민감', '사람 많은 장소도 즐김', '즉시 반응하고 표현함'],
    keywords: ['네온사인 골목', '포토존 많은 거리', '야시장'],
  },
  {
    id: 'jupiter',
    title: '🎞️ 감정을 기록하는 조용한 필름러',
    mbti: ['ISFP', 'ESFP'],
    description:
      '풍경에서 감정을 읽어내고, 그 순간의 분위기를 고요히 간직하는 사람. 당신의 야경은 하나의 감성 앨범이에요.',
    features: ['감정 몰입형', '감성적인 시선으로 관찰함', '감정을 이미지로 기억함'],
    keywords: ['감성 사진 스팟', '조용한 강변', '잔잔한 조도'],
  },
  {
    id: 'saturn',
    title: '🗺️ 계획이 완성될 때 안정되는 루트 마스터',
    mbti: ['ESTJ', 'ENTJ'],
    description:
      '체계와 효율을 중시하는 당신은 야경조차 계획적이에요. 미리 짠 동선 속에서 목적지에 도달할 때 가장 안정감을 느껴요.',
    features: ['계획 세우기를 좋아함', '명확한 목적지 선호', '효율적인 경로 중시'],
    keywords: ['전망대', '지도 기반 루트', '산책 앱'],
  },
  {
    id: 'uranus',
    title: '🪄 야경 속 패턴을 읽는 관찰자',
    mbti: ['INTJ', 'INTP'],
    description:
      '구조와 의미를 탐색하는 눈으로 풍경을 바라보는 타입. 감정보다는 패턴과 상징을 따라 걷는 깊은 관찰자예요.',
    features: ['논리적인 관찰', '풍경의 구조에 집중', '감정보다 의미 중심'],
    keywords: ['도심 건축 뷰', '옥상', '구조적인 조명'],
  },
  {
    id: 'neptune',
    title: '🌌 풍경에 잠겨버리는 몽환 감성러',
    mbti: ['INFP', 'INFJ'],
    description:
      '상상력과 몰입의 세계 속을 걷는 당신은 야경 속에서 이야기를 만들고, 자신을 그 감정에 녹이는 감성 러버예요.',
    features: ['감정 몰입이 강함', '풍경에 상상력을 더함', '혼자만의 이야기로 연결함'],
    keywords: ['구름 낀 강변', '물가', '감성 많은 새벽길'],
  },
];
