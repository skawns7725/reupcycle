import React, { useState } from 'react';
import { X, Hammer, Wrench, Calendar, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface WorkshopModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkshopModal: React.FC<WorkshopModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedClass, setSelectedClass] = useState('class1');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-11-15');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const classes = [
    {
      id: 'class1',
      title: '스크랩 메탈 & 파이프 스툴 만들기',
      duration: '2.5시간',
      fee: '₩35,000 (재료비 전액 포함)',
      desc: '기초 안전 교육 후 산업용 파이프와 폐원목을 결합해 견고한 인더스트리얼 스툴을 완성합니다.',
      skills: ['파이프 절단 및 나사산 체결', '목재 샌딩 및 오일 버핑', '자체 하중 테스트']
    },
    {
      id: 'class2',
      title: '고재 원목 모듈러 데스크 오거나이저',
      duration: '2시간',
      fee: '₩28,000 (재료비 전액 포함)',
      desc: '대학 캠퍼스 강의실 해체 고재를 다듬어 랩톱 스탠드, 펜 홀더, 스마트폰 거치대를 제작합니다.',
      skills: ['수공구 대패 & 톱질 기본', '도미노 목공 결구', '천연 밀랍 바니시']
    },
    {
      id: 'class3',
      title: '초보자를 위한 TIG/아크 기초 용접 탐구',
      duration: '3시간',
      fee: '₩45,000 (보호 장구 완비)',
      desc: '창직자 김남준의 전문 기계 조작 노하우를 바탕으로 안전하게 철재를 용접해 미니 조명 프레임을 만듭니다.',
      skills: ['용접면 착용 및 아크 발생', '모재 비드 형성 실습', '금속 글라인더 연마']
    }
  ];

  const tools = [
    { name: 'RE:SPACE 시그니처 배관 조인트 스타터 팩', price: '₩18,000', note: '공구 없이 손으로 조립하는 가구 키트' },
    { name: '천연 텅오일(Tung Oil) 목재 방수 마감 세트', price: '₩14,000', note: '1인 가구 안전 무독성 식물성 오일' },
    { name: '산업용 방염 내열 가죽 작업 장갑', price: '₩9,000', note: '창직자가 직접 현장에서 검증한 안전 장비' }
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
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
              RE:SPACE 수익 모델 B
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2">
              <Hammer className="w-5 h-5 text-neutral-900" />
              <span>친환경 자재 가공 원데이 클래스 & DIY 공구 큐레이션</span>
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              지역 청년들이 직접 손으로 가구를 만들고, 나만의 공간을 채우는 경험을 통해 로컬에 애착을 형성합니다.
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
          {/* Class Selection Cards */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              01. 정규 원데이 클래스 커리큘럼 (소수정예 4인)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {classes.map((cls) => (
                <div
                  key={cls.id}
                  onClick={() => setSelectedClass(cls.id)}
                  className={`p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedClass === cls.id
                      ? 'border-neutral-900 bg-neutral-50 ring-1 ring-neutral-900'
                      : 'border-neutral-200 bg-white hover:border-neutral-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
                      <span>{cls.duration}</span>
                      <span className="font-semibold text-neutral-900">{cls.fee}</span>
                    </div>
                    <div className="text-sm font-bold text-neutral-900 mb-2">{cls.title}</div>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-3">{cls.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-neutral-200/60 text-[11px] text-neutral-500 space-y-1">
                    {cls.skills.map((sk, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <span>·</span>
                        <span>{sk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DIY Tool / Hardware Curation */}
          <div className="p-4 bg-neutral-50 border border-neutral-200">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2.5 flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5 text-neutral-600" />
              <span>DIY 공구 & 업사이클 부자재 큐레이션 (수익 모델 B 마진 연계)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
              {tools.map((t, idx) => (
                <div key={idx} className="p-3 bg-white border border-neutral-200">
                  <div className="font-medium text-neutral-900">{t.name}</div>
                  <div className="text-neutral-500 text-[11px] mt-0.5">{t.note}</div>
                  <div className="text-xs font-bold text-neutral-900 mt-2 tabular-nums">{t.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="pt-2 border-t border-neutral-200">
            {isSuccess ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-center">
                <Check className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-emerald-800">
                  원데이 클래스 수강 신청이 완료되었습니다!
                </p>
                <p className="text-[11px] text-emerald-600 mt-0.5">
                  작업실 위치(대학가 청년센터 인근) 및 준비물 안내 문자가 발송됩니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-900 flex items-center justify-between">
                  <span>원데이 클래스 수강 예약</span>
                  <span className="text-[11px] text-neutral-500">
                    지역 청년센터 회원 10% 추가 할인
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="수강생 성함"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-xs px-3 py-2 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="연락처 (010-0000-0000)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-xs px-3 py-2 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="text-xs px-3 py-2 border border-neutral-300 focus:outline-hidden focus:border-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>클래스 예약 확정하기</span>
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
