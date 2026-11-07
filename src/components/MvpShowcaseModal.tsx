import React, { useState } from 'react';
import { X, Instagram, Video, Store, Check, ArrowRight, Sparkles } from 'lucide-react';

interface MvpShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MvpShowcaseModal: React.FC<MvpShowcaseModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activePilot, setActivePilot] = useState<number>(0);
  const [storeName, setStoreName] = useState('');
  const [storeType, setStoreType] = useState('');
  const [storeContact, setStoreContact] = useState('');
  const [fixtureNeeded, setFixtureNeeded] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const pilots = [
    {
      id: 1,
      store: '대학가 1호점 — 골목 로스터리 카페',
      location: '캠퍼스 정문 앞 골목 상권',
      problem: '초기 인테리어 예산 부족으로 주문 카운터와 대기 벤치 마련 곤란',
      solution: '인근 물류 파렛트와 스크랩 강재를 정밀 절단·용접해 맞춤형 에스프레소 바 카운터 제작',
      costReduction: '기성 인테리어 ₩2,400,000 → 업사이클 실비 ₩380,000 (84% 절감)',
      mediaType: '인스타그램 카드뉴스 5컷 & 릴스 숏폼 (조회수 1.8만)',
      cardNewsSlides: [
        '01. 철거 직전 파렛트 수거 현장 탐색',
        '02. 김남준 파운더의 정밀 평탄화 & TIG 용접 작업',
        '03. 친환경 천연 오일 마감 및 방수 코팅',
        '04. 매장 실측 배치 및 점주 인터뷰 "비용 80% 줄이고 분위기 최고"'
      ],
      reaction: '카페 방문 대학생들의 인스타 포토존으로 입소문, 청년 고객 방문 35% 증가'
    },
    {
      id: 2,
      store: '대학가 2호점 — 청년 독립 빈티지 의류점',
      location: '대학가 청년창업거리 B1',
      problem: '두꺼운 겨울 아우터를 거치할 견고한 의류 행거 비용 및 협소한 매장',
      solution: '폐공장 아연도금 파이프를 나사산 가공하여 천장-바닥 일체형 트러스 행거 구축',
      costReduction: '상업용 시스템 행거 ₩1,200,000 → 업사이클링 ₩220,000 (81% 절감)',
      mediaType: '숏폼 영상 (작업 비하인드 45초 숏폼)',
      cardNewsSlides: [
        '01. 노후 파이프 녹 제거 및 표면 버핑',
        '02. 80kg 하중 테스트 완료 (패딩 40벌 거치)',
        '03. 하부 신발 수거 고재 선반 결합',
        '04. 대학생 옷가게 오프닝 데이 현장'
      ],
      reaction: '지역 청년 패션 동아리와의 네트워크 연계 및 공간 대관 활성화'
    },
    {
      id: 3,
      store: '대학가 3호점 — 로컬 청년 베이커리',
      location: '대학 후문 주택가 상권',
      problem: '골목 안쪽에 위치하여 지나가는 학생들의 시선을 끌 감성 입간판 필요',
      solution: '철거 아크릴 잔여판과 금속 선반 절삭칩을 활용한 자석 교체형 메뉴 입간판 제작',
      costReduction: '주문 제작 금속 간판 ₩650,000 → 업사이클링 ₩95,000 (85% 절감)',
      mediaType: '카드뉴스 4컷 및 릴스 홍보',
      cardNewsSlides: [
        '01. 버려진 아크릴 투명도 복원 폴리싱',
        '02. 절삭 금속 칩을 감성 오브제로 재배치',
        '03. 방수 LED 백라이트 모듈 결합',
        '04. 일일 빵 라인업 자석 메뉴판 완성'
      ],
      reaction: '골목 유입 손님 28% 증가, SNS 감성 사진 공유 확산'
    }
  ];

  const current = pilots[activePilot];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeName || !storeContact) return;
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-neutral-200 shadow-2xl">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400 mb-1">
              REPORT SECTION 4 · MVP VERIFICATION
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2">
              <Store className="w-5 h-5 text-neutral-900" />
              <span>대학가 소상공인 점포 3곳 무료 시범 제작 실증 (MVP)</span>
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              최소 자원으로 시장 수용도를 검증하기 위해 대학가 3개 매장에 무료 시범 집기를 제작하고 인스타그램/숏폼 카드뉴스로 홍보했습니다.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-neutral-400 hover:text-neutral-900 border border-neutral-200 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Pilot Store Selector Tabs */}
        <div className="grid grid-cols-3 border-b border-neutral-200 text-xs bg-neutral-50">
          {pilots.map((pilot, idx) => (
            <button
              key={pilot.id}
              onClick={() => setActivePilot(idx)}
              className={`p-3.5 text-center font-medium border-r last:border-r-0 transition-colors cursor-pointer ${
                activePilot === idx
                  ? 'bg-white text-neutral-900 font-bold border-b-2 border-b-neutral-900'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              <span className="block text-[10px] text-neutral-400 uppercase">검증 점포 0{idx + 1}</span>
              <span className="truncate block mt-0.5">{pilot.store.split('—')[1]}</span>
            </button>
          ))}
        </div>

        {/* Selected Pilot Details */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Story Details */}
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                  점포명 및 위치
                </span>
                <div className="text-base font-bold text-neutral-900">{current.store}</div>
                <div className="text-neutral-500">{current.location}</div>
              </div>

              <div className="p-3.5 bg-neutral-50 border border-neutral-200 space-y-2">
                <div>
                  <span className="font-semibold text-neutral-900 block">현장 Pain Point:</span>
                  <p className="text-neutral-600 mt-0.5">{current.problem}</p>
                </div>
                <div className="pt-2 border-t border-neutral-200/60">
                  <span className="font-semibold text-neutral-900 block">창직자 솔루션:</span>
                  <p className="text-neutral-600 mt-0.5">{current.solution}</p>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold">
                비용 절감 효과: {current.costReduction}
              </div>

              <div>
                <span className="font-semibold text-neutral-900 block mb-1">검증 결과 및 고객 반응:</span>
                <p className="text-neutral-600 leading-relaxed">{current.reaction}</p>
              </div>
            </div>

            {/* Mockup Card News / Shortform visualizer */}
            <div className="border border-neutral-200 p-5 bg-neutral-900 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] text-neutral-400 pb-3 border-b border-neutral-800">
                  <div className="flex items-center gap-1.5 text-pink-400">
                    <Instagram className="w-3.5 h-3.5" />
                    <span>MVP 홍보 카드뉴스</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Video className="w-3.5 h-3.5" />
                    <span>숏폼 릴스</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2.5">
                  <div className="text-xs font-semibold text-white">
                    {current.mediaType}
                  </div>
                  <div className="space-y-1.5">
                    {current.cardNewsSlides.map((slide, idx) => (
                      <div
                        key={idx}
                        className="text-xs p-2 bg-neutral-800 border border-neutral-700 text-neutral-200 flex items-center gap-2"
                      >
                        <span className="text-[10px] text-neutral-400 font-mono">[{idx + 1}]</span>
                        <span>{slide}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">
                #로컬업사이클링 #김남준파운더 #대학가상권살리기 #1인가구가구제작
              </div>
            </div>
          </div>

          {/* Form to Apply for the Next Batch (점포 4~6호 무료 시범 집기 신청) */}
          <div className="pt-6 border-t border-neutral-200">
            {isSuccess ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-center">
                <Check className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-emerald-800">
                  소상공인 무료 시범 제작 지원 신청이 접수되었습니다!
                </p>
                <p className="text-[11px] text-emerald-600 mt-0.5">
                  김남준 파운더가 직접 점포를 방문하여 공간 실측 및 업사이클링 시안을 제공합니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                    대학가 소상공인 4호~6호 무료 시범 제작 지원 신청 (선착순 3곳)
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    자재비·제작비 전액 무료 (숏폼 제작 동의 조건)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="매장 상호명"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="text-xs px-3 py-2 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                  <input
                    type="text"
                    required
                    placeholder="업종 (예: 카페, 꽃집, 옷가게, 베이커리)"
                    value={storeType}
                    onChange={(e) => setStoreType(e.target.value)}
                    className="text-xs px-3 py-2 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="대표자 연락처"
                    value={storeContact}
                    onChange={(e) => setStoreContact(e.target.value)}
                    className="text-xs px-3 py-2 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                </div>

                <input
                  type="text"
                  required
                  placeholder="필요한 집기 (예: 창가 바 테이블, 입간판, 원목 진열 선반, 조명 스탠드 등)"
                  value={fixtureNeeded}
                  onChange={(e) => setFixtureNeeded(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>무료 시범 제작 신청서 제출</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
