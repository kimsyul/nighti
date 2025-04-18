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
