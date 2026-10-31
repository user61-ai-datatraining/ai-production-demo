import { useState } from 'react';
import ScenarioLayer from './components/ScenarioLayer';
import ProcessLayer from './components/ProcessLayer';
import DataLayer from './components/DataLayer';
import TechLayer from './components/TechLayer';

type LayerType = 'overview' | 'scenario' | 'process' | 'data' | 'tech';

const layers = [
  { id: 'overview' as LayerType, label: '全景总览', icon: '🏭', color: 'from-gray-700 to-gray-600' },
  { id: 'scenario' as LayerType, label: '场景层', icon: '🎯', color: 'from-cyan-700 to-cyan-600' },
  { id: 'process' as LayerType, label: '流程层', icon: '🔄', color: 'from-emerald-700 to-emerald-600' },
  { id: 'data' as LayerType, label: '数据层', icon: '📊', color: 'from-amber-700 to-amber-600' },
  { id: 'tech' as LayerType, label: '技术层', icon: '⚙️', color: 'from-violet-700 to-violet-600' },
];

export default function App() {
  const [activeLayer, setActiveLayer] = useState<LayerType>('overview');

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-violet-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                🤖 机器人工厂数字化经营
              </h1>
              <p className="text-gray-400 text-sm mt-1">四层架构全景 · 从场景到技术的端到端数字化体系</p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs text-gray-400">系统运行中</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {layers.map(layer => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeLayer === layer.id
                    ? `bg-gradient-to-r ${layer.color} text-white shadow-lg`
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <span>{layer.icon}</span>
                <span>{layer.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-fadeIn">
          {activeLayer === 'overview' && <Overview key="overview" />}
          {activeLayer === 'scenario' && <ScenarioLayer key="scenario" />}
          {activeLayer === 'process' && <ProcessLayer key="process" />}
          {activeLayer === 'data' && <DataLayer key="data" />}
          {activeLayer === 'tech' && <TechLayer key="tech" />}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">机器人工厂数字化转型 · 四层架构驱动智能制造</p>
        </div>
      </footer>
    </div>
  );
}

function Overview() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="text-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
            数字化经营四层架构
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-slideUp animation-delay-200">
          以终为始，从客户场景出发，构建端到端的数字化经营体系
        </p>
      </div>

      {/* Four layers visualization */}
      <div className="relative max-w-4xl mx-auto">
        {/* Connection lines */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-emerald-500/50 to-violet-500/50 hidden md:block"></div>
        
        <div className="space-y-6">
          {/* Layer 1: Scenario */}
          <div className="relative md:w-[48%] md:ml-0 animate-slideLeft animation-delay-100">
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h3 className="text-cyan-300 font-bold text-xl">场景层</h3>
                  <p className="text-cyan-400/70 text-xs">SCENARIO LAYER</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">客户或员工要完成什么任务？</p>
              <div className="flex flex-wrap gap-2">
                {['定制下单', '智能排产', '预测维护', '质量追溯', '供应链协同', '远程运维'].map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-500">
                💡 以用户为中心，定义数字化的价值起点
              </div>
            </div>
          </div>

          {/* Layer 2: Process */}
          <div className="relative md:w-[48%] md:ml-auto animate-slideRight animation-delay-200">
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h3 className="text-emerald-300 font-bold text-xl">流程层</h3>
                  <p className="text-emerald-400/70 text-xs">PROCESS LAYER</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">价值如何端到端流动？</p>
              <div className="flex items-center gap-1 flex-wrap">
                {['需求', '设计', '采购', '生产', '测试', '交付', '运维'].map((step, i) => (
                  <span key={step} className="flex items-center gap-1">
                    <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-300">{step}</span>
                    {i < 6 && <span className="text-emerald-500 text-xs">→</span>}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-500">
                💡 端到端流程拉通，消除信息孤岛与流程断点
              </div>
            </div>
          </div>

          {/* Layer 3: Data */}
          <div className="relative md:w-[48%] md:ml-0 animate-slideLeft animation-delay-300">
            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/10 rounded-xl p-6 border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📊</span>
                <div>
                  <h3 className="text-amber-300 font-bold text-xl">数据层</h3>
                  <p className="text-amber-400/70 text-xs">DATA LAYER</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">用什么事实驱动判断？</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'OEE', value: '87.3%' },
                  { label: '合格率', value: '98.6%' },
                  { label: '交付率', value: '95.2%' },
                  { label: '能耗', value: '↓12.5' },
                ].map(item => (
                  <div key={item.label} className="bg-amber-500/5 rounded-lg p-2 text-center border border-amber-500/10">
                    <div className="text-amber-300 font-bold text-sm">{item.value}</div>
                    <div className="text-gray-500 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-500">
                💡 数据驱动决策，从经验判断走向事实判断
              </div>
            </div>
          </div>

          {/* Layer 4: Tech */}
          <div className="relative md:w-[48%] md:ml-auto animate-slideRight animation-delay-400">
            <div className="bg-gradient-to-br from-violet-900/30 to-violet-800/10 rounded-xl p-6 border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">⚙️</span>
                <div>
                  <h3 className="text-violet-300 font-bold text-xl">技术层</h3>
                  <p className="text-violet-400/70 text-xs">TECHNOLOGY LAYER</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">哪些平台与工具提供支撑？</p>
              <div className="flex flex-wrap gap-2">
                {['IoT平台', 'MES', 'ERP', '数字孪生', 'AI引擎', '数据中台'].map(tech => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-500">
                💡 技术底座支撑业务创新，平台化赋能敏捷迭代
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key insights */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700 animate-slideUp animation-delay-500">
          <div className="text-3xl mb-3">🔗</div>
          <h4 className="text-white font-semibold mb-2">纵向贯通</h4>
          <p className="text-gray-400 text-sm">从设备传感器到管理决策，数据自下而上流动，指令自上而下执行</p>
        </div>
        <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700 animate-slideUp animation-delay-600">
          <div className="text-3xl mb-3">🌐</div>
          <h4 className="text-white font-semibold mb-2">横向协同</h4>
          <p className="text-gray-400 text-sm">打破部门墙，实现研发-生产-供应链-服务的端到端协同</p>
        </div>
        <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700 animate-slideUp animation-delay-700">
          <div className="text-3xl mb-3">🚀</div>
          <h4 className="text-white font-semibold mb-2">持续进化</h4>
          <p className="text-gray-400 text-sm">数据反馈驱动流程优化，技术升级赋能场景创新，形成正向循环</p>
        </div>
      </div>

      {/* Relationship diagram */}
      <div className="mt-8 bg-gray-800/30 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold text-center mb-6">四层之间的关系</h3>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="text-cyan-300 text-sm font-medium w-20 text-right">场景层</div>
            <div className="w-48 h-10 bg-cyan-500/10 rounded-lg border border-cyan-500/30 flex items-center justify-center">
              <span className="text-xs text-cyan-300">定义"做什么"</span>
            </div>
            <div className="text-gray-500 text-xs">← 需求驱动</div>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-4">
            <div className="text-emerald-300 text-sm font-medium w-20 text-right">流程层</div>
            <div className="w-48 h-10 bg-emerald-500/10 rounded-lg border border-emerald-500/30 flex items-center justify-center">
              <span className="text-xs text-emerald-300">定义"怎么做"</span>
            </div>
            <div className="text-gray-500 text-xs">← 流程承载</div>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-4">
            <div className="text-amber-300 text-sm font-medium w-20 text-right">数据层</div>
            <div className="w-48 h-10 bg-amber-500/10 rounded-lg border border-amber-500/30 flex items-center justify-center">
              <span className="text-xs text-amber-300">定义"看什么"</span>
            </div>
            <div className="text-gray-500 text-xs">← 数据度量</div>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-4">
            <div className="text-violet-300 text-sm font-medium w-20 text-right">技术层</div>
            <div className="w-48 h-10 bg-violet-500/10 rounded-lg border border-violet-500/30 flex items-center justify-center">
              <span className="text-xs text-violet-300">定义"用什么"</span>
            </div>
            <div className="text-gray-500 text-xs">← 技术支撑</div>
          </div>
        </div>
      </div>
    </div>
  );
}
