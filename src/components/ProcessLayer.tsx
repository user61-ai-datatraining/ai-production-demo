import { useState } from 'react';
import { processSteps } from '../data/layers';

export default function ProcessLayer() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">🔄 流程层</h2>
        <p className="text-emerald-300 text-lg">价值如何端到端流动？</p>
        <p className="text-gray-400 mt-2">从需求到服务的完整价值链，识别每个环节的信息流与价值流</p>
      </div>

      {/* Process flow visualization */}
      <div className="relative overflow-x-auto pb-4">
        <div className="flex items-center gap-0 min-w-[900px] justify-center">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                style={{ animationDelay: `${index * 100}ms` }}
                className={`cursor-pointer relative group animate-fadeIn ${
                  activeStep === step.id ? 'z-10' : ''
                }`}
              >
                <div className={`w-28 h-28 rounded-xl flex flex-col items-center justify-center p-2 transition-all duration-300 border ${
                  activeStep === step.id
                    ? 'bg-emerald-900/50 border-emerald-400 shadow-lg shadow-emerald-500/30 scale-110'
                    : 'bg-gray-800/70 border-gray-600 hover:border-emerald-500 hover:scale-105'
                }`}>
                  <div className="text-2xl mb-1">
                    {['📥', '💡', '📦', '🏭', '🧪', '🚚', '🛠️'][index]}
                  </div>
                  <span className="text-white text-xs font-medium text-center leading-tight">{step.name}</span>
                  <span className="text-emerald-400 text-[10px] mt-1">{step.duration}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-emerald-500 text-lg z-0">
                    ▶
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      {activeStep && (
        <div className="bg-gray-800/60 rounded-xl border border-emerald-500/30 p-6 animate-fadeIn">
          {(() => {
            const step = processSteps.find(s => s.id === activeStep);
            if (!step) return null;
            return (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-medium mb-2 text-sm">📌 负责部门</h4>
                  <p className="text-white">{step.owner}</p>
                  <h4 className="text-emerald-400 font-medium mb-2 mt-4 text-sm">⏱️ 周期</h4>
                  <p className="text-white">{step.duration}</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-medium mb-2 text-sm">📥 输入</h4>
                  <ul className="space-y-1">
                    {step.inputs.map((input, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        {input}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-amber-400 font-medium mb-2 text-sm">📤 输出</h4>
                  <ul className="space-y-1">
                    {step.outputs.map((output, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Value flow summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl p-5 border border-blue-500/20">
          <h4 className="text-blue-300 font-semibold mb-2">📊 信息流</h4>
          <p className="text-gray-300 text-sm">订单信息、BOM数据、工艺参数、质检结果沿流程正向传递，反馈信息逆向回流</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 rounded-xl p-5 border border-emerald-500/20">
          <h4 className="text-emerald-300 font-semibold mb-2">💰 价值流</h4>
          <p className="text-gray-300 text-sm">原材料→半成品→成品→服务，每个环节增加附加值，总周期约19.5天</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl p-5 border border-purple-500/20">
          <h4 className="text-purple-300 font-semibold mb-2">⚡ 决策流</h4>
          <p className="text-gray-300 text-sm">数据驱动的实时决策贯穿全流程，AI辅助排产、智能质检、动态调度</p>
        </div>
      </div>
    </div>
  );
}
