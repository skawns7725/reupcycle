export interface GalleryItem {
  id: string;
  number: string;
  name: string;
  category: 'studio' | 'commercial' | 'circular' | 'workshop';
  categoryLabel: string;
  tag: string;
  image: string;
  price: string;
  originalEstimatePrice: string;
  buyBackGuarantee: string;
  dimensions: string;
  materials: string[];
  sourceOrigin: string;
  fabricationProcess: string;
  description: string;
  targetUser: string;
  features: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'raw-beam-console',
    number: '01',
    name: 'Raw Beam Console',
    category: 'commercial',
    categoryLabel: 'COMMERCIAL FIXTURE',
    tag: 'UPCYCLE · 01',
    image: '/src/assets/images/upcycle_console_metal_1794011903659.jpg',
    price: '₩185,000',
    originalEstimatePrice: '₩450,000',
    buyBackGuarantee: '₩120,000 (최대 65% 재매입)',
    dimensions: 'W1200 × D380 × H820 (mm)',
    materials: ['철거 공사장 회수 구조용 H빔 스틸', '대학 구내 벤치 잔여 폐오크 고재'],
    sourceOrigin: '지역 철거 현장에서 수거한 잔여 강재와 노후 캠퍼스 목재를 결합',
    fabricationProcess: '산소 절단 및 TIG 정밀 용접 후 천연 텅오일(Tung Oil) 침투 마감',
    description: '공사 현장의 구조용 H형강을 세밀하게 용접하고, 시간의 결이 깃든 고재 원목 상판을 얹어 견고함과 따스함을 동시에 담아낸 콘솔 테이블입니다.',
    targetUser: '대학가 인근 감성 카페 카운터, 청년 팝업스토어 진열대, 원룸 포인트 가구',
    features: ['초고강도 H빔 프레임', '친환경 천연 오일 방수 마감', '이사 시 분해 조립 가능']
  },
  {
    id: 'terrazzo-low-table',
    number: '02',
    name: 'Terrazzo Low Table',
    category: 'studio',
    categoryLabel: '1-PERSON YOUTH',
    tag: 'UPCYCLE · 02',
    image: '/src/assets/images/upcycle_coffee_table_1794011904541.jpg',
    price: '₩89,000',
    originalEstimatePrice: '₩240,000',
    buyBackGuarantee: '₩60,000 (최대 67% 재매입)',
    dimensions: 'Φ650 × H420 (mm)',
    materials: ['폐콘크리트 및 유리 파편 테라조', '스크랩 가스배관 원형 파이프'],
    sourceOrigin: '지역 인테리어 철거 폐골재와 고물상 잔여 강관 파이프',
    fabricationProcess: '파쇄 폐골재를 수용성 친환경 바인더로 주조 및 다단계 습식 샌딩',
    description: '버려지는 폐유리와 콘크리트 조각을 연마해 별빛 같은 테라조 상판을 만들고, 산업용 강관을 기하학적 트러스로 용접해 원룸에 안정감을 주는 로우 테이블입니다.',
    targetUser: '1인 가구 원룸 거실 좌식/소파 테이블, 대학생 스터디 라운지',
    features: ['스크래치 무풍 마감', '경량화된 트러스 하부 구조', '청년 1인 가구 맞춤 높이']
  },
  {
    id: 'studio-compact-desk',
    number: '03',
    name: 'Studio Compact Desk & Chair',
    category: 'studio',
    categoryLabel: '1-PERSON YOUTH',
    tag: 'UPCYCLE · 03',
    image: '/src/assets/images/upcycle_compact_desk_1794011905708.jpg',
    price: '₩129,000',
    originalEstimatePrice: '₩320,000',
    buyBackGuarantee: '₩90,000 (최대 70% 재매입)',
    dimensions: 'Desk: W850 × D500 × H740 / Shelf H920 (mm)',
    materials: ['대학 연구실 해체 자작나무 합판', '무광 블랙 재생 스틸 파이프'],
    sourceOrigin: '대학 창업지원단 리모델링 시 폐기 예정이던 연구용 데스크 상판',
    fabricationProcess: '정밀 목공 샌딩 후 나사식 배관 조인트로 손쉬운 볼트 체결 구조 설계',
    description: '좁은 원룸에서도 공간 낭비 없이 랩톱 작업과 서적 수납을 동시에 해결하는 청년 맞춤형 모듈 데스크 세트입니다. 드라이버 하나로 10분 만에 완전 분해됩니다.',
    targetUser: '대학가 자취생, 취업준비생, 원격 재택근무 1인 청년',
    features: ['상단 모니터/조명 스탠드 일체형', '10분 분해·조립 모듈', '이사 시 부피 70% 감소']
  },
  {
    id: 'structural-shelf',
    number: '04',
    name: 'Structural Geometric Shelf',
    category: 'studio',
    categoryLabel: 'MODULAR STORAGE',
    tag: 'UPCYCLE · 04',
    image: '/src/assets/images/upcycle_modular_shelf_1794011904944.jpg',
    price: '₩158,000',
    originalEstimatePrice: '₩390,000',
    buyBackGuarantee: '₩105,000 (최대 66% 재매입)',
    dimensions: 'W900 × D300 × H1500 (mm)',
    materials: ['폐물류창고 잔여 각파이프 프레임', '버려진 고재 목재 패널'],
    sourceOrigin: '지역 물류 보관소 철거 잔여 각파이프 및 팔레트 고재',
    fabricationProcess: '다각도 사선 용접 절단 및 목재 브러싱 가공으로 입체 음영 형성',
    description: '원룸의 수납과 공간 분리(파티션)를 한 번에 해결하는 조형미 넘치는 책장입니다. 벽에 못을 박지 않아도 자체 하중 지지로 든든하게 고정됩니다.',
    targetUser: '원룸 공간 분리가 필요한 1인 가구, 로컬 독립서점 및 편집숍',
    features: ['양면 노출 파티션 기능', '벽 타공 없는 안전 설계', '자체 하중 분산 지지']
  },
  {
    id: 'industrial-armchair',
    number: '05',
    name: 'Weld & Canvas Lounge Chair',
    category: 'studio',
    categoryLabel: '1-PERSON YOUTH',
    tag: 'UPCYCLE · 05',
    image: '/src/assets/images/upcycle_compact_desk_1794011905708.jpg',
    price: '₩98,000',
    originalEstimatePrice: '₩260,000',
    buyBackGuarantee: '₩70,000 (최대 71% 재매입)',
    dimensions: 'W620 × D680 × H760 (mm)',
    materials: ['재생 앵글 스틸 바', '폐군용 텐트 & 중고 캔버스 천'],
    sourceOrigin: '지역 군수 폐원단 재활용 협동조합 + 폐샤시 알루미늄/철재',
    fabricationProcess: '철제 뼈대 아크 용접 및 두꺼운 왁스 캔버스 3단 결착',
    description: '오래된 텐트 천의 질감과 거친 용접 스틸의 세련된 조화. 좁은 공간에서도 가벼운 이동성과 안락한 착좌감을 선사합니다.',
    targetUser: '원룸 릴랙스 체어, 카페 테라스 좌석',
    features: ['방수 왁스 코팅 캔버스', '초경량 5.8kg 설계', '착탈식 시트 세탁 가능']
  },
  {
    id: 'lab-timber-bench',
    number: '06',
    name: 'Campus Oak Dining Bench',
    category: 'commercial',
    categoryLabel: 'COMMERCIAL FIXTURE',
    tag: 'UPCYCLE · 06',
    image: '/src/assets/images/upcycle_console_metal_1794011903659.jpg',
    price: '₩110,000',
    originalEstimatePrice: '₩280,000',
    buyBackGuarantee: '₩75,000 (최대 68% 재매입)',
    dimensions: 'W1100 × D320 × H450 (mm)',
    materials: ['대학 캠퍼스 강의동 개편 잔여 단풍나무 집성목', '재생 잔재 철판'],
    sourceOrigin: '인근 대학교 교구 교체 사업에서 수거한 천연 단풍나무 상판',
    fabricationProcess: '대패 평탄화 후 모서리 곡면 가공 및 무독성 천연 왁스 도포',
    description: '대학 교정에 남아있던 단풍나무 상판을 되살려 2~3인이 편히 앉을 수 있는 다목적 벤치입니다. 식탁 의자 또는 현관 신발 벤치로 이상적입니다.',
    targetUser: '청년 쉐어하우스, 대학가 소상공인 식음료 매장 대기석',
    features: ['성인 3인 280kg 하중 테스트 완료', '바닥 긁힘 방지 펠트 글라이더', '물걸레 청소 가능']
  },
  {
    id: 'cafe-counter-module',
    number: '07',
    name: 'Modular Bar Counter (MVP #1)',
    category: 'commercial',
    categoryLabel: 'COMMERCIAL FIXTURE',
    tag: 'COMMERCIAL · 07',
    image: '/src/assets/images/upcycle_modular_shelf_1794011904944.jpg',
    price: '₩290,000',
    originalEstimatePrice: '₩850,000',
    buyBackGuarantee: '₩190,000 (최대 65% 재매입)',
    dimensions: 'W1600 × D600 × H950 (mm)',
    materials: ['지역 공장 폐목재 파렛트', '재생 아연도금 파이프 레일'],
    sourceOrigin: '대학가 골목 카페 1호점 시범 제작 MVP 실측 맞춤 시공 자재',
    fabricationProcess: '파렛트 완전 분해 후 열기 건조, 기계 대패 후 방수 탑코트 처리',
    description: '초기 창업 비용이 부족한 대학가 예비 청년 창업가를 위해 기성 카운터의 1/3 가격으로 제작한 이동식 모듈 카운터입니다.',
    targetUser: '지역 정착 청년 창업가, 대학가 소상공인 1~2인 카페/주점',
    features: ['내부 2단 수납 및 전기 배선 포트', '바퀴 이동/고정 듀얼 휠', '상호 레이저 각인 무료']
  },
  {
    id: 'circular-bed-frame',
    number: '08',
    name: 'Nomad Modular Bed Base',
    category: 'circular',
    categoryLabel: 'CIRCULAR BUY-BACK',
    tag: 'CIRCULAR · 08',
    image: '/src/assets/images/upcycle_compact_desk_1794011905708.jpg',
    price: '₩135,000',
    originalEstimatePrice: '₩330,000',
    buyBackGuarantee: '₩95,000 (최대 70% 재매입)',
    dimensions: 'Super Single: W1120 × L2020 × H250 (mm)',
    materials: ['업사이클 소나무 통목 슬랫', '이지 락킹 철제 커넥터'],
    sourceOrigin: '청년 원룸 퇴거 시 매입한 중고 침대 목재의 리사이클 선순환',
    fabricationProcess: '자외선 살균 세척, 기계 평탄화 후 조립 공구 없이 끼우는 쐐기 구조',
    description: '이사 갈 때마다 무겁고 버리기 일쑤인 매트리스 프레임을 6개의 모듈러 블록으로 분할하여, 여성 1인도 혼자 들고 옮길 수 있게 만든 선순환 침대입니다.',
    targetUser: '잦은 이사가 고민인 대학생 및 사회초년생 1인 가구',
    features: ['공구 불필요 3분 조립', '퇴거 시 RE:SPACE가 70% 가격에 즉시 재매입', '하부 수납공간 확보']
  },
  {
    id: 'reclaimed-mirror-stand',
    number: '09',
    name: 'Industrial Pipe Full Mirror',
    category: 'studio',
    categoryLabel: '1-PERSON YOUTH',
    tag: 'UPCYCLE · 09',
    image: '/src/assets/images/upcycle_coffee_table_1794011904541.jpg',
    price: '₩68,000',
    originalEstimatePrice: '₩180,000',
    buyBackGuarantee: '₩48,000 (최대 70% 재매입)',
    dimensions: 'W450 × D380 × H1650 (mm)',
    materials: ['철거 건물 잔여 유리 재가공 거울', '폐철제 수도관 파이프 프레임'],
    sourceOrigin: '지역 상가 리모델링 시 폐기되던 5T 강화 안전거울',
    fabricationProcess: '다이아몬드 휠 모서리 면취 가공 후 파이프 밴딩 및 조인트 결합',
    description: '거울 뒷면에 옷걸이 훅과 하부 가방 받침대를 통합해 원룸의 옷걸이와 전신거울을 하나로 압축한 다기능 아이템입니다.',
    targetUser: '옷 수납공간이 부족한 6평 미만 원룸 자취생',
    features: ['비산 방지 안전 필름 부착', '뒷면 3단 행거 일체형', '무게중심 저상형 설계']
  },
  {
    id: 'display-hanger-rack',
    number: '10',
    name: 'Pipe Clothing Rack (MVP #2)',
    category: 'commercial',
    categoryLabel: 'COMMERCIAL FIXTURE',
    tag: 'COMMERCIAL · 10',
    image: '/src/assets/images/upcycle_console_metal_1794011903659.jpg',
    price: '₩72,000',
    originalEstimatePrice: '₩190,000',
    buyBackGuarantee: '₩50,000 (최대 69% 재매입)',
    dimensions: 'W1000 × D420 × H1550 (mm)',
    materials: ['폐공장 아연도금 파이프', '하부 빈티지 수거 목재 선반'],
    sourceOrigin: '대학가 청년 빈티지 의류점 시범 집기 제작 지원',
    fabricationProcess: '파이프 나사산 절삭 가공 및 무광 녹 방지 오일 버핑',
    description: '대학가 청년 창업 옷가게의 집기 비용을 획기적으로 낮춘 산업용 파이프 행거. 겨울 패딩 30벌을 걸어도 휘어짐이 없는 견고함이 특징입니다.',
    targetUser: '지역 소상공인 의류 매장, 옷이 많은 1인 가구',
    features: ['하중 80kg 보증', '신발/가방 하부 선반 탑재', '너비 주문 맞춤 가능']
  },
  {
    id: 'workshop-diy-stool',
    number: '11',
    name: 'Workshop Reclaimed Stool',
    category: 'workshop',
    categoryLabel: 'WORKSHOP & KIT',
    tag: 'WORKSHOP · 11',
    image: '/src/assets/images/upcycle_modular_shelf_1794011904944.jpg',
    price: '₩35,000',
    originalEstimatePrice: '₩80,000',
    buyBackGuarantee: '체험 클래스 재료비 포함',
    dimensions: 'W300 × D300 × H430 (mm)',
    materials: ['대학 캠퍼스 가지치기 원목 슬라이스', '재활용 철근 16mm'],
    sourceOrigin: '원데이 클래스 수강 청년들이 직접 용접하고 깎아 만드는 업사이클링 스툴',
    fabricationProcess: '기초 아크 용접 + 목재 버닝 각인 + 천연 밀랍 코팅',
    description: '파운더 김남준의 원데이 클래스에서 청년들이 직접 손으로 만들어가는 친환경 자재 스툴입니다. 공구 다루는 법을 배우며 나만의 손때 묻은 가구를 완성합니다.',
    targetUser: '가구를 직접 만들어보고 싶은 대학생, 지역 정착 청년',
    features: ['초보자 2시간 완성 커리큘럼', '안전 장비 및 공구 풀세트 제공', '이니셜 레이저 각인']
  },
  {
    id: 'signboard-pedestal',
    number: '12',
    name: 'Store Identity Pedestal (MVP #3)',
    category: 'commercial',
    categoryLabel: 'COMMERCIAL FIXTURE',
    tag: 'COMMERCIAL · 12',
    image: '/src/assets/images/upcycle_coffee_table_1794011904541.jpg',
    price: '₩65,000',
    originalEstimatePrice: '₩180,000',
    buyBackGuarantee: '₩42,000 (최대 65% 재매입)',
    dimensions: 'W350 × D350 × H900 (mm)',
    materials: ['버려진 아크릴 잔여판', '선반 가공 폐칩 + 콘크리트 베이스'],
    sourceOrigin: '대학가 베이커리 3호점 무료 시범 제작 지원 및 숏폼 홍보',
    fabricationProcess: '선반 절삭 칩을 투명 레진/아크릴에 인클루드한 감성 조형물',
    description: '점포 입구에서 메뉴판을 거치하거나 오브제를 올려두는 입간판 겸용 스탠드. 숏폼 영상에서 2.4만 조회수를 기록한 시범 제작 히트 아이템입니다.',
    targetUser: '골목 상권 소상공인 매장, 청년 베이커리, 플라워숍',
    features: ['야외 방수/방풍 중량 설계', 'A4/A3 메뉴판 자석 교체형', '야간 반사 리플렉터']
  }
];

export const FOUNDER_INFO = {
  name: '김남준',
  title: '로컬 업사이클링 자재·가구 제작 파운더',
  headline: '버려지는 자재에 디자인을 더해 1인 가구 청년들에게 부담 없는 삶의 공간을 선물합니다.',
  problem: '대학가 상권 침체 및 지역 청년들의 타 지역 이탈 문제',
  settlementDrive: '잘 갖춰진 인프라, 쾌적하고 복잡하지 않은 환경, 적정한 물가 및 월세 수준 (안정적인 생활 기반)',
  targetPainPoint: '사업 초기 비싼 임대료 부담과 집기/가구 구비의 초기 비용 부담, 이사 시 가구 처분의 번거로움',
  competencies: [
    { title: '기계 조작 및 용접 기술', desc: '산업용 강재와 스크랩 메탈을 안전하고 미려한 구조물로 재해석하는 현장 금속 가공 역량' },
    { title: '독학 기반 DIY 탐구력', desc: '목재·아크릴·테라조 등 다양한 폐자재의 물성을 연구하고 최소 비용으로 최대 내구성을 도출' },
    { title: '사각지대 정상화 & 현장 해결력', desc: '폐기물 스티커로 버려지던 가구를 발굴해 수리·리폼하고 대학가 소상공인의 집기 비용 60% 절감' },
    { title: '강한 실행력과 추진력', desc: '대학가 소상공인 3곳 무료 시범 제작 MVP 즉시 실행 및 숏폼 기반 실증 검증' }
  ],
  revenueModels: [
    {
      code: 'MODEL A',
      title: '맞춤 가구 제작 & 선순환 바이백 (Buy-back)',
      desc: '업사이클링 매장 집기·가구 맞춤 제작/판매 및 1인 가구 청년 이사 시 가구 매입(최대 70% 가치 보장)을 통한 자원 선순환 리사이클링'
    },
    {
      code: 'MODEL B',
      title: '친환경 자재 가공 클래스 & 공구 큐레이션',
      desc: '지역 청년 대상 친환경 자재 가공 원데이 클래스 운영비 및 안전한 DIY 공구/업사이클 부자재 큐레이션 마진'
    }
  ],
  mvpPlan: {
    format: '인스타그램 및 숏폼 활용 카드뉴스 무료 시범 제작 3건',
    target: '대학가 인근 소상공인 점포 3곳 (카페, 의류점, 베이커리)',
    goal: '최소 자원으로 시장의 초기 수용도 및 고객 반응 확인'
  },
  roadmap: {
    partners: ['대학 창업지원단', '지역 청년센터'],
    vision: '1인 가구 청년들에게 저렴한 맞춤 가구를 제공하고 체험 클래스를 운영하며, 이사 시 가구를 매입·리사이클링하는 선순환 로컬 거점을 구축하여 지역 청년 정착 기반을 강화합니다.'
  }
};
