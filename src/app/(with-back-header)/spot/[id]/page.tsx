import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Bus, TrainFront } from 'lucide-react';
import Image from 'next/image';

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

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <section>
        <h1 className="text-accent font-bold text-4xl">{mockData.title}</h1>
        <span>{mockData.addr}</span>
      </section>
      <Image src={'/shooting-star.png'} alt="남산 타워" width={1} height={1} className="w-full rounded-4xl" />
      <section className="flex flex-col gap-4 pb-10 border-b-2 border-dashed border-secondary">
        <div className="flex flex-col">
          <span className="text-accent font-bold text-lg">운영 시간</span>
          <span>{mockData.operating_time}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-accent font-bold text-lg">이용 요금</span>
          <span>{mockData.entry_fee ?? mockData.free_yn}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-accent font-bold text-lg">주차 정보</span>
          <span>{mockData.parking_info ?? '주차 정보 제공 X'}</span>
        </div>
        {mockData.url && (
          <div className="flex flex-col">
            <span className="text-accent font-bold text-lg">홈페이지</span>
            <a href={mockData.url} target="_blank" rel="noopener noreferrer" className="underline">
              {mockData.url}
            </a>
          </div>
        )}
        {mockData.tel_no && (
          <div className="flex flex-col">
            <span className="text-accent font-bold text-lg">문의</span>
            <span>{mockData.tel_no}</span>
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-accent font-bold text-lg">오시는 길</span>
          <div className="flex flex-col gap-1">
            {mockData.subway && (
              <div className="flex gap-2">
                <TrainFront size={20} />
                <span className="flex-1">{mockData.subway}</span>
              </div>
            )}
            {mockData.bus && (
              <div className="flex gap-2">
                <Bus size={20} />
                <span className="flex-1">{mockData.bus}</span>
              </div>
            )}
            <div className="flex gap-2 mt-2 justify-center">
              <Button variant="outline" className="w-40 font-bold">
                <a href={`https://map.naver.com/p/search/${mockData.addr}`} target="_blank" rel="noopener noreferrer">
                  네이버 지도
                </a>
              </Button>
              <Button variant="outline" className="w-40 font-bold">
                <a
                  href={`https://map.kakao.com/?map_type=TYPE_MAP&q=${mockData.addr}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  카카오 맵
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col pb-10">
        <span className="text-accent font-bold text-lg">소개</span>
        <p className="leading-relaxed text-justify text-sm">{mockData.contents}</p>
      </div>
    </div>
  );
}
