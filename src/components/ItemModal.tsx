import React, { useState } from 'react';
import { GalleryItem } from '../data/items';
import { X, Check, RefreshCw, Hammer, Ruler, ShieldCheck, ArrowRight } from 'lucide-react';

interface ItemModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onOpenBuyBackModal: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({
  item,
  onClose,
  onOpenBuyBackModal,
}) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [customRequest, setCustomRequest] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!item) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-neutral-200 shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 text-neutral-400 hover:text-neutral-900 bg-white/80 border border-neutral-200 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Image & Material Badge */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-neutral-50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-200">
          <div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400 mb-2">
              {item.tag} · {item.categoryLabel}
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
              {item.name}
            </h2>
          </div>

          <div className="my-8 flex items-center justify-center p-4 bg-white border border-neutral-200">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="max-h-[320px] w-auto object-contain drop-shadow-md"
            />
          </div>

          <div className="p-4 bg-white border border-neutral-200 text-xs text-neutral-600 space-y-1.5">
            <div className="font-semibold text-neutral-900 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-neutral-700" />
              선순환 재매입 보장 (Buy-Back Guarantee)
            </div>
            <p className="text-neutral-500">
              청년이 다른 지역이나 다른 원룸으로 이사할 때, RE:SPACE가 직접 방문하여 가구 상태에 따라 {item.buyBackGuarantee} 금액으로 재매입합니다.
            </p>
          </div>
        </div>

        {/* Right Column: Specifications & Direct Inquiry */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white">
          <div className="space-y-6">
            {/* Pricing Section */}
            <div className="pb-4 border-b border-neutral-200">
              <div className="text-xs uppercase tracking-wider text-neutral-400">
                1인 가구 청년 지원 특별 보급가
              </div>
              <div className="mt-1 flex items-baseline gap-3">
                <span className="text-3xl font-extrabold tracking-tight text-neutral-900 tabular-nums">
                  {item.price}
                </span>
                <span className="text-sm text-neutral-400 line-through tabular-nums">
                  시중 기성가 {item.originalEstimatePrice}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  약 60% 절감
                </span>
              </div>
            </div>

            {/* Core Details */}
            <div className="space-y-3 text-xs text-neutral-700">
              <div>
                <span className="font-semibold text-neutral-900 block mb-1">
                  작품 개요 & 설계 의도
                </span>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2 border-t border-neutral-100">
                <div className="flex items-start gap-2">
                  <Ruler className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-neutral-900">규격: </span>
                    <span className="tabular-nums text-neutral-600">{item.dimensions}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Hammer className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-neutral-900">재활용 자재 출처: </span>
                    <span className="text-neutral-600">{item.sourceOrigin}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-neutral-900">창직자 가공 기술: </span>
                    <span className="text-neutral-600">{item.fabricationProcess}</span>
                  </div>
                </div>
              </div>

              {/* Feature Points */}
              <div className="pt-2 border-t border-neutral-100">
                <span className="font-semibold text-neutral-900 block mb-1.5">
                  핵심 솔루션 강점
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-neutral-100 text-neutral-700 px-2.5 py-1 border border-neutral-200"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Inquiry Form */}
          <div className="mt-8 pt-4 border-t border-neutral-200">
            {isSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-center">
                <Check className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-emerald-800">
                  맞춤 제작 문의가 접수되었습니다.
                </p>
                <p className="text-[11px] text-emerald-600 mt-0.5">
                  김남준 파운더가 24시간 내 상세 실측 및 견적 안내를 드립니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="text-xs font-semibold text-neutral-900 flex items-center justify-between">
                  <span>맞춤 제작 / 점포 시안 신청</span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenBuyBackModal();
                    }}
                    className="text-[11px] text-neutral-500 hover:text-neutral-900 underline cursor-pointer"
                  >
                    이사 가구 매입(Buy-back) 신청하기
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="신청자명 (소상공인/청년)"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="연락처 (010-0000-0000)"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                </div>
                <input
                  type="text"
                  placeholder="희망 규격, 설치 공간(원룸/매장), 요청사항 등"
                  value={customRequest}
                  onChange={(e) => setCustomRequest(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>제작 및 실측 상담 접수</span>
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
