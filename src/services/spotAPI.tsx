// // const BASE_URL = 'http://openapi.seoul.go.kr:8088/7a4e6b5764637066333769706b7353/json/viewNightSpot/';

// export async function getSpotList() {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_SPOT_API}/1/5`);
//   if (!response.ok) {
//     throw new Error('데이터를 불러오는데 실패했어요 😣');
//   }
//   const data: SeoulNightSpotAPI = await response.json();
//   const allSpots = data.viewNightSpot.row.map((spot: SeoulNightSpotRow) => ({
//     num: spot.NUM,
//     title: spot.TITLE,
//     addr: spot.ADDR,
//     freeYn: spot.FREE_YN,
//     operatingTime: spot.OPERATING_TIME,
//   }));

//   return allSpots;
// }
