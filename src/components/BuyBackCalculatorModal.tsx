import React, { useState } from 'react';
import { X, RefreshCw, CheckCircle2, Truck, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface BuyBackCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BuyBackCalculatorModal: React.FC<BuyBackCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [itemType, setItemType] = useState('desk');
  const [source, setSource] = useState<'respace' | 'external'>('respace');
  const [duration, setDuration] = useState('6to12');
  const [condition, setCondition] = useState('a');
  
  // Booking form
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [moveDate, setMoveDate] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  // Base values for estimation
  const basePrices: Record<string, number> = {
    desk: 130000,
    bed: 140000,
    shelf: 160000,
    chair: 80000,
    hanger: 75000,
    counter: 300000,
  };

  const itemNames: Record<string, string> = {
    desk: '원룸 워크 데스크 & 테이블',
    bed: '모듈형 침대 프레임',
    shelf: '파티션 수납 책장 및 선반',
    chair: '용접 스틸 체어 & 스툴',
    hanger: '산업용 파이프 옷걸이 행거',
    counter: '소상공인 매장 카운터/집기',
  };

  const basePrice = basePrices[itemType] || 120000;
  
  // Source multiplier
  const sourceMult = source === 'respace' ? 0.70 : 0.40;
  
  // Duration multiplier
  let durationMult = 1.0;
  if (duration === 'under6') durationMult = 1.05;
  if (duration === '6to12') durationMult = 0.95;
  if (duration === '12to24') durationMult = 0.85;
  if (duration === 'over24') durationMult = 0.75;

  // Condition multiplier
  let condMult = 1.0;
  if (condition === 'a') condMult = 1.0;
  if (condition === 'b') condMult = 0.85;
  if (condition === 'c') condMult = 0.65;

  const estimatedPayout = Math.round((basePrice * sourceMult * durationMult * condMult) / 1000) * 1000;
  const wasteFeeSaved = 15000;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone) return;
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white border border-neutral-200 shadow-2xl">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400 mb-1">
              RE:SPACE 선순환 리사이클링 솔루션 A
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-neutral-900" />
              <span>이사 청년 가구 선순환 매입(Buy-Back) 계산기</span>
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              이사할 때 폐기물 스티커 붙여 버리지 마세요. 김남준 파운더가 직접 방문하여 현금 매입 및 무상 수거합니다.
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

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1: Furniture Category */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
                01. 처분 대상 가구/집기 종류
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(itemNames).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setItemType(key)}
                    className={`p-2.5 text-left border transition-colors cursor-pointer ${
                      itemType === key
                        ? 'border-neutral-900 bg-neutral-900 text-white font-medium'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Origin Source */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
                02. 가구 구매 출처
              </label>
              <div className="space-y-2 text-xs">
                <button
                  type="button"
                  onClick={() => setSource('respace')}
                  className={`w-full p-3 text-left border transition-colors cursor-pointer flex items-center justify-between ${
                    source === 'respace'
                      ? 'border-neutral-900 bg-neutral-50 text-neutral-900 font-semibold'
                      : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  <div>
                    <div>RE:SPACE 정품 업사이클 가구</div>
                    <div className="text-[11px] text-neutral-500 font-normal">
                      최초 구입가 기준 최대 70% 가치 환급 보장
                    </div>
                  </div>
                  {source === 'respace' && <CheckCircle2 className="w-4 h-4 text-neutral-900" />}
                </button>
                <button
                  type="button"
                  onClick={() => setSource('external')}
                  className={`w-full p-3 text-left border transition-colors cursor-pointer flex items-center justify-between ${
                    source === 'external'
                      ? 'border-neutral-900 bg-neutral-50 text-neutral-900 font-semibold'
                      : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  <div>
                    <div>타 브랜드 원목/철제 중고 가구</div>
                    <div className="text-[11px] text-neutral-500 font-normal">
                      상태 감정 후 업사이클 자재 리사이클링 매입
                    </div>
                  </div>
                  {source === 'external' && <CheckCircle2 className="w-4 h-4 text-neutral-900" />}
                </button>
              </div>

              {/* Step 3: Usage Duration */}
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
                  03. 사용 기간
                </label>
                <div className="grid grid-cols-4 gap-1.5 text-xs text-center">
                  {[
                    { key: 'under6', label: '6개월 미만' },
                    { key: '6to12', label: '6~12개월' },
                    { key: '12to24', label: '1~2년' },
                    { key: 'over24', label: '2년 이상' },
                  ].map((dur) => (
                    <button
                      key={dur.key}
                      type="button"
                      onClick={() => setDuration(dur.key)}
                      className={`py-2 border transition-colors cursor-pointer ${
                        duration === dur.key
                          ? 'border-neutral-900 bg-neutral-900 text-white font-medium'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
                      }`}
                    >
                      {dur.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Condition */}
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
                  04. 외관 및 구조 상태
                </label>
                <div className="grid grid-cols-3 gap-1.5 text-xs text-center">
                  {[
                    { key: 'a', label: 'A급 (파손 없음)' },
                    { key: 'b', label: 'B급 (생활 기스)' },
                    { key: 'c', label: 'C급 (스크래치/오염)' },
                  ].map((c) => (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => setCondition(c.key)}
                      className={`py-2 border transition-colors cursor-pointer ${
                        condition === c.key
                          ? 'border-neutral-900 bg-neutral-900 text-white font-medium'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Output Display */}
          <div className="p-6 bg-neutral-900 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 block">
                  실시간 예상 매입 지급액 (Estimated Cash Buy-Back)
                </span>
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1 tabular-nums text-white flex items-baseline gap-2">
                  <span>₩{estimatedPayout.toLocaleString()}</span>
                  <span className="text-xs font-normal text-amber-300">
                    {source === 'respace' ? '최대 70% 환급 적용' : '선순환 자재 매입 기준'}
                  </span>
                </div>
              </div>

              <div className="text-xs text-neutral-300 space-y-1 md:text-right border-t md:border-t-0 pt-3 md:pt-0 border-neutral-800">
                <div className="flex md:justify-end items-center gap-1.5 text-emerald-400 font-medium">
                  <Shield className="w-3.5 h-3.5" />
                  <span>폐기물 처리 스티커 비용 ₩{wasteFeeSaved.toLocaleString()} 절감</span>
                </div>
                <div className="flex md:justify-end items-center gap-1.5 text-neutral-400">
                  <Truck className="w-3.5 h-3.5" />
                  <span>대학가 인근 원룸 무상 방문 수거 지원</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking / Pickup Request Form */}
          <div className="pt-2 border-t border-neutral-200">
            {isSuccess ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 text-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-emerald-900">
                  선순환 매입 방문 수거 신청이 접수되었습니다!
                </h3>
                <p className="text-xs text-emerald-700 mt-1">
                  김남준 파운더가 신청자분께 연락하여 방문 일정을 확정하고 현금 즉시 입금을 진행합니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
                  방문 수거 및 매입 일정 신청서
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="신청자 청년 이름"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="연락처 (010-0000-0000)"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="대학가 원룸 주소 (예: 대학로 12길 O호)"
                    value={userAddress}
                    onChange={(e) => setUserAddress(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                  <input
                    type="date"
                    required
                    value={moveDate}
                    onChange={(e) => setMoveDate(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>₩{estimatedPayout.toLocaleString()} 즉시 매입 및 방문 수거 예약</span>
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
