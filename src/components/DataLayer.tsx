import { useState } from 'react';
import { dataMetrics } from '../data/layers';

export default function DataLayer() {
  const [filter, setFilter] = useState<string>('全部');
  const categories = ['全部', ...Array.from(new Set(dataMetrics.map(m => m.category)))];
  
  const filtered = filter === '全部' ? dataMetrics : dataMetrics.filter(m => m.category === filter);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      default: return '➡️';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-400';
      case 'down': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">📊 数据层</h2>
        <p className="text-amber-300 text-lg">用什么事实驱动判断？</p>
        <p className="text-gray-400 mt-2">以数据为核心，构建从采集到决策的完整数据价值链</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all ${
              filter === cat
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                : 'bg-gray-800/60 text-gray-400 border border-gray-700 hover:border-amber-500/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((metric, index) => (
          <div
            key={metric.id}
            style={{ animationDelay: `${index * 50}ms` }}
            className="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:border-amber-500/30 transition-all animate-fadeIn"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-white font-medium text-sm">{metric.name}</h4>
                <span className="text-xs text-gray-500">{metric.category}</span>
              </div>
              <span className={`text-lg ${getTrendColor(metric.trend)}`}>
                {getTrendIcon(metric.trend)}
              </span>
            </div>
            <div className="text-2xl font-bold text-amber-300 mb-3">{metric.value}</div>
            <p className="text-gray-400 text-xs mb-3">{metric.description}</p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">来源: {metric.source}</span>
              <span className="text-amber-400/70">频率: {metric.frequency}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Data architecture */}
      <div className="mt-8 bg-gray-800/40 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4 text-center">数据架构全景</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="bg-gradient-to-b from-blue-900/30 to-transparent rounded-lg p-4 border border-blue-500/20 text-center">
            <div className="text-2xl mb-2">📡</div>
            <h5 className="text-blue-300 text-sm font-medium">数据采集</h5>
            <p className="text-xs text-gray-400 mt-1">IoT传感器、PLC、扫码枪、人工录入</p>
          </div>
          <div className="bg-gradient-to-b from-emerald-900/30 to-transparent rounded-lg p-4 border border-emerald-500/20 text-center">
            <div className="text-2xl mb-2">🔄</div>
            <h5 className="text-emerald-300 text-sm font-medium">数据集成</h5>
            <p className="text-xs text-gray-400 mt-1">ETL、消息队列、API网关、主数据管理</p>
          </div>
          <div className="bg-gradient-to-b from-amber-900/30 to-transparent rounded-lg p-4 border border-amber-500/20 text-center">
            <div className="text-2xl mb-2">🧠</div>
            <h5 className="text-amber-300 text-sm font-medium">数据治理</h5>
            <p className="text-xs text-gray-400 mt-1">数据标准、质量监控、元数据管理、安全合规</p>
          </div>
          <div className="bg-gradient-to-b from-purple-900/30 to-transparent rounded-lg p-4 border border-purple-500/20 text-center">
            <div className="text-2xl mb-2">📈</div>
            <h5 className="text-purple-300 text-sm font-medium">数据应用</h5>
            <p className="text-xs text-gray-400 mt-1">BI报表、AI预测、实时看板、智能决策</p>
          </div>
        </div>
      </div>
    </div>
  );
}
