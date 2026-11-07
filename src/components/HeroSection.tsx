import React from 'react';
import { ArrowDown, Sparkles, RefreshCw, Hammer, Building2 } from 'lucide-react';

interface HeroSectionProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenFounderModal: () => void;
  onOpenBuyBackModal: () => void;
  onOpenMvpModal: () => void;
  totalCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenFounderModal,
  onOpenBuyBackModal,
  onOpenMvpModal,
  totalCount,
}) => {
  return (
    <section className="pt-16 pb-12 px-6 md:px-10 max-w-[1440px] mx-auto border-b border-neutral-200">
      {/* Top micro kicker */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs tracking-wider uppercase text-neutral-500 mb-8 pb-3 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-900">창직자 김남준</span>
          <span>·</span>
          <span>로컬 업사이클링 자재·가구 제작 파운더</span>
          <span>·</span>
          <span>대학가 청년 정주 생태계 거점</span>
        </div>
        <div className="flex items-center gap-4 text-neutral-600">
          <span>인프라 연계: 대학 창업지원단</span>
          <span>·</span>
          <span>지역 청년센터</span>
        </div>
      </div>

      {/* Main Massive Editorial Title (Benchmarking Console⁹ style) */}
      <div className="text-center py-6 md:py-10">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-neutral-900 inline-flex items-start justify-center">
          <span>UPCYCLE</span>
          <sup className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral-400 ml-1 mt-2">
            ⁹
          </sup>
        </h1>

        {/* Core Value Proposition Headline directly from Report */}
        <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl font-light text-neutral-800 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
          버려지는 자재에 디자인을 더해 1인 가구 청년들에게 부담 없는 삶의 공간을 선물합니다.
        </p>

        {/* Narrative Sub-copy */}
        <p className="mt-3 text-sm md:text-base text-neutral-500 max-w-2xl mx-auto leading-normal">
          대학가 상권 침체와 청년 이탈 문제를 해결하기 위해, 용접·기계 가공 기술과 지역 폐자재를 결합해 시중가 1/3 수준의 맞춤 가구 및 선순환 매입(Buy-back)을 실현합니다.
        </p>

        {/* Key Quick Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenBuyBackModal}
            className="px-5 py-2.5 text-xs font-medium tracking-wide uppercase bg-neutral-900 text-white hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>이사 가구 선순환 매입(Buy-Back) 견적기</span>
          </button>
          <button
            onClick={onOpenMvpModal}
            className="px-5 py-2.5 text-xs font-medium tracking-wide uppercase bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors border border-neutral-200 flex items-center gap-2 cursor-pointer"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>대학가 소상공인 무료 시범 집기 신청 (MVP)</span>
          </button>
          <button
            onClick={onOpenFounderModal}
            className="px-5 py-2.5 text-xs font-medium tracking-wide uppercase bg-white text-neutral-700 hover:text-neutral-900 transition-colors border border-neutral-200 flex items-center gap-2 cursor-pointer"
          >
            <Hammer className="w-3.5 h-3.5" />
            <span>창직자 스토리 & 로드맵</span>
          </button>
        </div>
      </div>

      {/* 3 Key Quantitative Proof Strips */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 border-t border-b border-neutral-200 py-4">
        <div className="py-3 md:py-0 px-4 text-center md:text-left">
          <div className="text-xs uppercase tracking-wider text-neutral-400 mb-1">Cost Burden Relief</div>
          <div className="text-xl font-bold tracking-tight text-neutral-900 tabular-nums">초기 가구비용 60% 절감</div>
          <div className="text-xs text-neutral-500 mt-0.5">지역 폐철골·목재 직가공으로 유통 마진 제거</div>
        </div>
        <div className="py-3 md:py-0 px-4 text-center md:text-left">
          <div className="text-xs uppercase tracking-wider text-neutral-400 mb-1">Circular Guarantee</div>
          <div className="text-xl font-bold tracking-tight text-neutral-900 tabular-nums">최대 70% 재매입 보장</div>
          <div className="text-xs text-neutral-500 mt-0.5">원룸 이사 시 폐기물 비용 제로 & 방문 수거 매입</div>
        </div>
        <div className="py-3 md:py-0 px-4 text-center md:text-left">
          <div className="text-xs uppercase tracking-wider text-neutral-400 mb-1">Local MVP Validation</div>
          <div className="text-xl font-bold tracking-tight text-neutral-900 tabular-nums">소상공인 3곳 시범 검증</div>
          <div className="text-xs text-neutral-500 mt-0.5">카드뉴스·숏폼 콘텐츠 기반 점포 맞춤 집기 제작</div>
        </div>
      </div>

      {/* Interactive Category Segmented Tabs (Clean buttons without pill styling) */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
          Archived Pieces <span className="tabular-nums text-neutral-900">({totalCount})</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 rounded-none border border-neutral-200">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            전체 컬렉션 (ALL)
          </button>
          <button
            onClick={() => onSelectCategory('studio')}
            className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              activeCategory === 'studio'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            1인 가구 청년 가구
          </button>
          <button
            onClick={() => onSelectCategory('commercial')}
            className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              activeCategory === 'commercial'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            대학가 소상공인 집기 (MVP)
          </button>
          <button
            onClick={() => onSelectCategory('circular')}
            className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              activeCategory === 'circular'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            선순환 바이백 모듈
          </button>
          <button
            onClick={() => onSelectCategory('workshop')}
            className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              activeCategory === 'workshop'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            원데이 클래스 & 키트
          </button>
        </div>
      </div>
    </section>
  );
};
