import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenFounderModal: () => void;
  onOpenBuyBackModal: () => void;
  onOpenWorkshopModal: () => void;
  onOpenMvpModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenFounderModal,
  onOpenBuyBackModal,
  onOpenWorkshopModal,
  onOpenMvpModal,
}) => {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-600 text-xs">
      {/* 4-column layout matching reference image */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: ABOUT US */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-bold tracking-wider uppercase text-neutral-900">
            ABOUT US
          </h4>
          <p className="text-neutral-500 leading-relaxed text-[11px]">
            RE:SPACE는 버려지는 산업 자재와 캠퍼스 폐목재에 감각적인 디자인과 정밀 용접 기술을 더해, 대학가 1인 가구 청년들과 소상공인에게 부담 없는 공간을 제공하는 로컬 정주형 업사이클링 가구 스튜디오입니다.
          </p>
          <div className="pt-1">
            <button
              onClick={onOpenFounderModal}
              className="text-neutral-900 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>창직자 김남준 소개 & 로드맵</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Column 2: CONTACT INFO */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-bold tracking-wider uppercase text-neutral-900">
            CONTACT INFO
          </h4>
          <div className="space-y-1.5 text-[11px] text-neutral-500">
            <div>
              <span className="text-neutral-400 block">제작 및 바이백 문의 전화</span>
              <span className="font-mono text-neutral-800">010-8254-9009 (상시 상담)</span>
            </div>
            <div className="pt-1">
              <span className="text-neutral-400 block">이메일 문의</span>
              <span className="font-mono text-neutral-800">founder.namjun@respace.local</span>
            </div>
            <div className="pt-1">
              <span className="text-neutral-400 block">상담 운영 시간</span>
              <span>평일 09:00 - 19:00 / 토 10:00 - 15:00</span>
            </div>
          </div>
        </div>

        {/* Column 3: ADDRESS & INFRASTRUCTURE */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-bold tracking-wider uppercase text-neutral-900">
            ADDRESS & LOCAL HUB
          </h4>
          <div className="space-y-1 text-[11px] text-neutral-500">
            <div className="text-neutral-800 font-medium">RE:SPACE 업사이클 제작 작업실</div>
            <div>대학로 104번길 18 (청년창업 복합단지 A동 102호)</div>
            <div className="pt-2 text-neutral-400">협력 인프라 연계:</div>
            <div>· 대학 창업지원단 제작지원센터</div>
            <div>· 로컬 청년센터 메이커스페이스</div>
          </div>
        </div>

        {/* Column 4: SOCIAL MEDIA & PILOT */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-bold tracking-wider uppercase text-neutral-900">
            MVP & SOCIAL MEDIA
          </h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <button
                onClick={onOpenMvpModal}
                className="hover:text-neutral-900 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>인스타그램 카드뉴스 MVP (소상공인 3곳 검증)</span>
              </button>
            </li>
            <li>
              <button
                onClick={onOpenBuyBackModal}
                className="hover:text-neutral-900 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>이사 가구 선순환 매입(Buy-Back) 신청</span>
              </button>
            </li>
            <li>
              <button
                onClick={onOpenWorkshopModal}
                className="hover:text-neutral-900 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>친환경 자재 가공 원데이 클래스 예약</span>
              </button>
            </li>
            <li className="pt-1 text-neutral-400">
              YouTube Shorts · Instagram @respace.upcycle
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Line matching reference footer */}
      <div className="border-t border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © RE:SPACE 2026. All rights reserved. 로컬 업사이클링 자재·가구 제작 파운더 김남준
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenFounderModal}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              창직 아이디어 발상 보고서
            </button>
            <span className="text-neutral-300">|</span>
            <a href="#" className="hover:text-neutral-900 transition-colors">
              Terms & Conditions
            </a>
            <span className="text-neutral-300">|</span>
            <a href="#" className="hover:text-neutral-900 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
