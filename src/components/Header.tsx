import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenFounderModal: () => void;
  onOpenBuyBackModal: () => void;
  onOpenWorkshopModal: () => void;
  onOpenMvpModal: () => void;
  onScrollToGallery: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenFounderModal,
  onOpenBuyBackModal,
  onOpenWorkshopModal,
  onOpenMvpModal,
  onScrollToGallery,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-neutral-900 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity flex items-center gap-1.5"
        >
          <span>RE:SPACE</span>
          <sup className="text-xs font-semibold text-neutral-500">⁹</sup>
        </a>

        {/* Zone 2: 4–5 single-line clean text links */}
        <nav className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-neutral-600">
          <button
            onClick={onOpenFounderModal}
            className="hover:text-neutral-900 transition-colors whitespace-nowrap cursor-pointer text-left"
          >
            About Founder
          </button>
          <button
            onClick={onScrollToGallery}
            className="hover:text-neutral-900 transition-colors whitespace-nowrap cursor-pointer text-left"
          >
            Collection
          </button>
          <button
            onClick={onOpenBuyBackModal}
            className="hover:text-neutral-900 transition-colors whitespace-nowrap cursor-pointer text-left flex items-center gap-1"
          >
            <span>Circular Buy-Back</span>
            <span className="text-[10px] text-neutral-400">· 70%</span>
          </button>
          <button
            onClick={onOpenWorkshopModal}
            className="hover:text-neutral-900 transition-colors whitespace-nowrap cursor-pointer text-left"
          >
            Workshop & Kit
          </button>
          <button
            onClick={onOpenMvpModal}
            className="hover:text-neutral-900 transition-colors whitespace-nowrap cursor-pointer text-left flex items-center gap-1"
          >
            <span>MVP Pilot</span>
            <span className="text-[10px] text-neutral-900 font-semibold underline underline-offset-2">3건 검증</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBuyBackModal}
            className="px-4 py-2 text-xs font-medium tracking-wide text-white bg-neutral-900 hover:bg-neutral-800 transition-colors rounded-none flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>선순환 매입 & 상담</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
