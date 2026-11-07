import React, { useState } from 'react';
import { GalleryItem } from '../data/items';
import { ChevronLeft, ChevronRight, Eye, RefreshCw } from 'lucide-react';

interface GalleryGridProps {
  items: GalleryItem[];
  onSelectItem: (item: GalleryItem) => void;
  onOpenBuyBackModal: () => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  onSelectItem,
  onOpenBuyBackModal,
}) => {
  // Store view angle or mode for each item: 0 = Main Studio Shot, 1 = Material Source, 2 = Blueprint Specs
  const [viewModes, setViewModes] = useState<Record<string, number>>({});

  const handleToggleView = (itemId: string, direction: 'next' | 'prev', e: React.MouseEvent) => {
    e.stopPropagation();
    setViewModes((prev) => {
      const current = prev[itemId] || 0;
      const next = direction === 'next' ? (current + 1) % 3 : (current - 1 + 3) % 3;
      return { ...prev, [itemId]: next };
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10" id="collection-grid">
      {items.length === 0 ? (
        <div className="py-20 text-center border border-neutral-200">
          <p className="text-sm text-neutral-500">해당 카테고리의 제작 결과물이 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-neutral-200">
          {items.map((item) => {
            const currentView = viewModes[item.id] || 0;

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group relative flex flex-col justify-between border-r border-b border-neutral-200 bg-white p-6 md:p-8 hover:bg-neutral-50/50 transition-colors cursor-pointer"
              >
                {/* Cell Header: Left tag & Right arrow navigation controls */}
                <div className="flex items-center justify-between text-[11px] tracking-wider uppercase text-neutral-400 font-medium mb-4">
                  <span className="group-hover:text-neutral-900 transition-colors">
                    {item.tag}
                  </span>

                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={(e) => handleToggleView(item.id, 'prev', e)}
                      aria-label="Previous preview mode"
                      className="p-1 hover:text-neutral-900 text-neutral-400 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] tabular-nums text-neutral-500">
                      0{currentView + 1} / 03
                    </span>
                    <button
                      onClick={(e) => handleToggleView(item.id, 'next', e)}
                      aria-label="Next preview mode"
                      className="p-1 hover:text-neutral-900 text-neutral-400 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Center Visual Area */}
                <div className="relative aspect-square w-full flex items-center justify-center my-4 overflow-hidden bg-white">
                  {currentView === 0 ? (
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  ) : currentView === 1 ? (
                    <div className="w-full h-full p-6 bg-neutral-50 flex flex-col justify-center border border-neutral-200/60">
                      <div className="text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                        Rescued Material Origin
                      </div>
                      <div className="text-sm font-semibold text-neutral-900 mb-2">
                        {item.materials[0]}
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {item.sourceOrigin}
                      </p>
                      <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-neutral-500">
                        가공 기술: {item.fabricationProcess}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full p-6 bg-neutral-900 text-white flex flex-col justify-center">
                      <div className="text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                        Circular Spec & Guarantee
                      </div>
                      <div className="text-lg font-bold tracking-tight mb-2">
                        {item.dimensions}
                      </div>
                      <div className="text-xs text-neutral-300 leading-relaxed mb-3">
                        {item.targetUser}
                      </div>
                      <div className="text-xs font-semibold text-amber-300">
                        {item.buyBackGuarantee}
                      </div>
                    </div>
                  )}

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors pointer-events-none flex items-end justify-end p-2 opacity-0 group-hover:opacity-100">
                    <span className="text-[11px] bg-white text-neutral-900 px-2 py-1 shadow-xs border border-neutral-200 flex items-center gap-1 font-medium">
                      <Eye className="w-3 h-3" />
                      상세 정보
                    </span>
                  </div>
                </div>

                {/* Cell Footer: Title & Pricing baseline */}
                <div className="pt-4 border-t border-neutral-100">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-neutral-900 tracking-tight group-hover:text-neutral-700 transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-right">
                      <span className="text-sm font-bold text-neutral-900 tabular-nums">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center justify-between text-xs text-neutral-500">
                    <span className="truncate max-w-[180px]">{item.categoryLabel}</span>
                    <span className="line-through text-neutral-400 tabular-nums text-[11px]">
                      시중가 {item.originalEstimatePrice}
                    </span>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-neutral-100/80 flex items-center justify-between text-[11px]">
                    <span className="text-neutral-600 font-medium flex items-center gap-1">
                      <RefreshCw className="w-2.5 h-2.5 text-neutral-400" />
                      {item.buyBackGuarantee.split(' ')[0]} 재매입
                    </span>
                    <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors">
                      스펙 보기 →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
