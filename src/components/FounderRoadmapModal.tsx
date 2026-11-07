import React from 'react';
import { FOUNDER_INFO } from '../data/items';
import { X, CheckCircle, ShieldCheck, Compass, Users, Target, ArrowRight } from 'lucide-react';

interface FounderRoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBuyBackModal: () => void;
  onOpenMvpModal: () => void;
}

export const FounderRoadmapModal: React.FC<FounderRoadmapModalProps> = ({
  isOpen,
  onClose,
  onOpenBuyBackModal,
  onOpenMvpModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-neutral-200 shadow-2xl">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400 mb-1">
              CAREER CREATION PROPOSAL · FOUNDER KIM NAM-JUN
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900">
              {FOUNDER_INFO.name} — {FOUNDER_INFO.title}
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              지역 정주형 창직 아이디어 발상 보고서 기반 실행 계획 & 비전
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
        <div className="p-6 md:p-8 space-y-8">
          {/* Headline Banner */}
          <div className="p-6 bg-neutral-900 text-white">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
              Core Value Proposition
            </span>
            <div className="text-lg md:text-xl font-bold leading-relaxed">
              "{FOUNDER_INFO.headline}"
            </div>
            <div className="mt-3 text-xs text-neutral-400">
              창직자: {FOUNDER_INFO.name} · 지역 정주 동력: {FOUNDER_INFO.settlementDrive}
            </div>
          </div>

          {/* Problem & Target Pain Point */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-4 border border-neutral-200 bg-neutral-50">
              <div className="flex items-center gap-1.5 text-neutral-900 font-bold mb-2">
                <Target className="w-4 h-4 text-neutral-700" />
                <span>우리가 해결할 지역 현안 (Problem)</span>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-3">
                {FOUNDER_INFO.problem}
              </p>
              <div className="pt-2 border-t border-neutral-200/80 text-neutral-500">
                <strong className="text-neutral-800">창직자의 정주 동력:</strong> 잘 갖춰진 인프라, 쾌적하고 복잡하지 않은 환경, 적정한 물가 및 월세 수준을 기반으로 지속 가능한 생활 기반을 다집니다.
              </div>
            </div>

            <div className="p-4 border border-neutral-200 bg-neutral-50">
              <div className="flex items-center gap-1.5 text-neutral-900 font-bold mb-2">
                <Users className="w-4 h-4 text-neutral-700" />
                <span>잠재 고객 및 Pain Point</span>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-3">
                {FOUNDER_INFO.targetPainPoint}
              </p>
              <div className="pt-2 border-t border-neutral-200/80 text-neutral-500">
                <strong className="text-neutral-800">타겟 그룹:</strong> 지역 정착 예비 청년 창업가 & 대학가 인근 1인 가구 청년
              </div>
            </div>
          </div>

          {/* 4 Core Competencies */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              창직자 김남준의 핵심 전문성 및 경쟁력
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {FOUNDER_INFO.competencies.map((comp, idx) => (
                <div key={idx} className="p-3.5 border border-neutral-200 bg-white">
                  <div className="font-bold text-neutral-900 mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                    <span>{comp.title}</span>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{comp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dual Revenue Models */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              수익 모델 (Revenue Model A & B)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {FOUNDER_INFO.revenueModels.map((model, idx) => (
                <div key={idx} className="p-4 border border-neutral-900 bg-neutral-50 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-neutral-900 text-white inline-block mb-2">
                      {model.code}
                    </span>
                    <div className="text-sm font-bold text-neutral-900 mb-2">{model.title}</div>
                    <p className="text-neutral-600 leading-relaxed">{model.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-neutral-500 flex items-center justify-between">
                    <span>실증 상태: 즉시 가동 중</span>
                    <button
                      onClick={() => {
                        onClose();
                        idx === 0 ? onOpenBuyBackModal() : onOpenMvpModal();
                      }}
                      className="text-neutral-900 font-semibold underline cursor-pointer"
                    >
                      상세 실행 →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Collaboration & Long-term Vision */}
          <div className="p-5 border border-neutral-200 bg-neutral-50 text-xs space-y-3">
            <div className="flex items-center gap-2 text-neutral-900 font-bold">
              <Compass className="w-4 h-4 text-neutral-900" />
              <span>지역 정주 로드맵 및 비전</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-neutral-700">
              <span className="font-semibold text-neutral-900">필수 협력 기관:</span>
              <span className="bg-white px-2 py-1 border border-neutral-200">
                대학 창업지원단 (창업 공간/장비 인프라 지원)
              </span>
              <span className="bg-white px-2 py-1 border border-neutral-200">
                지역 청년센터 (청년 입주 네트워크 및 클래스 연계)
              </span>
            </div>
            <p className="text-neutral-600 leading-relaxed pt-2 border-t border-neutral-200">
              {FOUNDER_INFO.roadmap.vision}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
