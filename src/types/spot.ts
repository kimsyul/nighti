// interface SeoulNightSpotRow {
//   ADDR: string;
//   BUS?: string;
//   CONTENTS: string;
//   ENTR_FEE?: string;
//   FREE_YN: string;
//   LA: string;
//   LO: string;
//   MOD_DATE: string;
//   NUM: number;
//   OPERATING_TIME: string;
//   PARKING_INFO?: string;
//   REG_DATE: string;
//   SUBJECT_CD: string;
//   SUBWAY?: string;
//   TEL_NO?: string;
//   TITLE: string;
//   URL?: string;
// }

import { Database } from '../../types_db';

// interface SeoulNightSpotAPI {
//   viewNightSpot: {
//     list_total_count: number;
//     RESULT: {
//       CODE: string;
//       MESSAGE: string;
//     };
//     row: SeoulNightSpotRow[];
//   };
// }

// interface SeoulNightSpot {
//   addr: string;
//   bus?: string;
//   contents: string;
//   entrFee?: string;
//   freeYn: string;
//   la: string;
//   lo: string;
//   modDate: string;
//   num: number;
//   operatingTime: string;
//   parkingInfo?: string;
//   regDate: string;
//   subjectCd: string;
//   subway?: string;
//   telNo?: string;
//   title: string;
//   url?: string;
// }

export type SeoulNightSpot = Database['public']['Tables']['spots']['Row'];

export type SpotCardInfo = Pick<SeoulNightSpot, 'num' | 'title' | 'operatingTime' | 'isFree' | 'address' | 'img'>;
