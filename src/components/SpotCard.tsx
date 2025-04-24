import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';

const mockData = {
  lo: '126.987867837993',
  tel_no: '02-3455-9277, 9288',
  bus: '남산순환버스 01A번, 01B번 이용  * 남산공원 생태 환경 보호 일환으로 승용차량 통행 제한',
  contents:
    '남산서울타워는 효율적인 방송전파 송수신과 한국의 전통미를 살린 관광 전망시설의 기능을 겸비한 국내 최초의 종합전파 탑으로 방송문화와 관광산업의 미래를 위해 건립되었습니다. 세계 유명한 종합 탑들이 그 나라 또는 그 도시의 상징적인 존재가 된 것처럼 남산서울타워 역시 지난 40여 년간 대한민국의 대표적인 관광지이자 서울의 상징물 역할을 해왔습니다. 남산서울타워는 서울 시내 전 지역에서 바라보이는 탑의 높이와 독특한 구조, 형태 등으로 인하여 시민의 관심과 사랑의 대상이 되었고, 내외국인들이 즐겨 찾는 제1의 관광 명소로서의 위치를 확고히 하고 있습니다. 최근에는 한류 바람을 몰고 온 각종 예능, 드라마의 촬영지로 이름이 높아지면서 내외국인 관광객들이 발길이 끊이지 않는 곳입니다.(출처 : 남산서울타워 홈페이지) 전망대 뿐만 아니라 남산공원에서 산책하면서, 남산케이블카를 이용하면서, 남산둘레길 트레킹하면서 서울의 야경도 다양하게 감상할 수 있습니다.',
  operating_time: '연중무휴 * 타워내 개별시설 운영시간 상이',
  addr: '서울특별시 용산구 남산공원길 105',
  subject_cd: '문화/체육',
  reg_date: 1717513200000,
  url: 'https://www.seoultower.co.kr/',
  free_yn: '무료',
  entry_fee: '남산공원 입장료 없음(전망대 등 개별 이용시설 요금 별도)',
  num: 1,
  title: '남산서울타워',
  subway: '지하철 4호선 회현역 3번 출구 도보 이용',
  mod_date: 1719215999000,
  la: '37.5511225714939',
  parking_info: null,
};

export default function SpotCard() {
  return (
    <Link
      href={`/spot/${mockData.num}`}
      className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-[1.01] cursor-pointer border-1 border-dashed border-secondary rounded-2xl w-3/4 m-auto py-6">
      <Image src={'/shooting-star.png'} width={1} height={1} alt="남산 타워" className="w-6/7 rounded-2xl" />
      <div className="w-6/7 flex flex-col gap-1.5">
        <div className="flex justify-between">
          <div className="text-amber-200 text-xl font-bold">{mockData.title}</div>
          <Badge variant="outline">{mockData.free_yn}</Badge>
        </div>
        <div>{mockData.addr}</div>
        <div>{mockData.operating_time}</div>
      </div>
    </Link>
  );
}
