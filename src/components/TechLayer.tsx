import { useState } from 'react';
import { motion } from 'framer-motion';
import { techComponents } from '../data/layers';

export default function TechLayer() {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const categories = ['全部', ...Array.from(new Set(techComponents.map(t => t.category)))];
  
  const filtered = selectedCategory === '全部' 
    ? techComponents 
    : techComponents.filter(t => t.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      '感知层': 'border-cyan-500/30 bg-cyan-500/5',
      '执行层': 'border-emerald-500/30 bg-emerald-500/5',
      '管理层': 'border-blue-500/30 bg-blue-500/5',
      '仿真层': 'border-purple-500/30 bg-purple-500/5',
      '智能层': 'border-amber-500/30 bg-amber-500/5',
      '物流层': 'border-orange-500/30 bg-orange-500/5',
      '研发层': 'border-pink-500/30 bg-pink-500/5',
      '控制层': 'border-red-500/30 bg-red-500/5',
      '数据层': 'border-indigo-500/30 bg-indigo-500/5',
      '应用层': 'border-teal-500/30 bg-teal-500/5',
    };
    return colors[category] || 'border-gray-500/30 bg-gray-500/5';
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">⚙️ 技术层</h2>
        <p className="text-violet-300 text-lg">哪些平台与工具提供支撑？</p>
        <p className="text-gray-400 mt-2">构建稳固的技术底座，支撑上层业务场景与数据流转</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs transition-all ${
              selectedCategory === cat
                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/50'
                : 'bg-gray-800/60 text-gray-400 border border-gray-700 hover:border-violet-500/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech components grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((tech, index) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-xl p-5 border ${getCategoryColor(tech.category)} hover:scale-[1.02] transition-all`}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="text-white font-semibold">{tech.name}</h4>
                <span className="text-xs text-gray-500">{tech.category}</span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-gray-700/50 text-gray-300">
                {tech.vendor}
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-3">{tech.function}</p>
            <div className="flex flex-wrap gap-1.5">
              {tech.connections.map((conn, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  ↔ {conn}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Architecture diagram */}
      <div className="mt-8 bg-gray-800/40 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4 text-center">技术架构分层</h3>
        <div className="space-y-2">
          {[
            { layer: '应用层', items: '低代码平台 · 移动端APP · Web门户', color: 'from-teal-500/20 to-teal-500/5', border: 'border-teal-500/30' },
            { layer: '智能层', items: 'AI/ML引擎 · 知识图谱 · 推荐系统', color: 'from-amber-500/20 to-amber-500/5', border: 'border-amber-500/30' },
            { layer: '平台层', items: 'MES · ERP · PLM · WMS · CRM', color: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/30' },
            { layer: '数据层', items: '数据中台 · 数据湖 · 时序数据库', color: 'from-indigo-500/20 to-indigo-500/5', border: 'border-indigo-500/30' },
            { layer: '连接层', items: 'IoT网关 · 边缘计算 · 5G专网 · OPC-UA', color: 'from-cyan-500/20 to-cyan-500/5', border: 'border-cyan-500/30' },
            { layer: '设备层', items: '工业机器人 · CNC · AGV · 传感器 · PLC', color: 'from-gray-500/20 to-gray-500/5', border: 'border-gray-500/30' },
          ].map((item, i) => (
            <motion.div
              key={item.layer}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-r ${item.color} rounded-lg p-3 border ${item.border} flex items-center`}
            >
              <span className="text-white font-medium text-sm w-16">{item.layer}</span>
              <span className="text-gray-300 text-xs">{item.items}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
