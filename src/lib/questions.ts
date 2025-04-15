export type Question = {
  id: number;
  question: string;
  option: {
    label: string;
    value: string;
  }[];
};

// export const QUESTIONS: Question[] = [
//   {
//     id: 1,
//     question: '지금 당신에게 필요한 것은 무엇인가요?',
//     option: [{ label: '하루 종일 에너지가 넘쳤어요!', value: 'URBAN' }, { label: '차분하다' }],
//   },
//   {},
//   {},
//   {},
//   {},
//   {},
// ];
