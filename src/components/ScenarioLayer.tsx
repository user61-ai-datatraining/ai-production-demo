import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scenarios } from '../data/layers';

export default function ScenarioLayer() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">🎯 场景层</h2>
        <p className="text-cyan-300 text-lg">客户或员工要完成什么任务？</p>
        <p className="text-gray-400 mt-2">从用户视角出发，识别数字化需要支撑的核心业务场景</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scenarios.map((scenario, index) => (
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelected(selected === scenario.id ? null : scenario.id)}
            className={`cursor-pointer rounded-xl p-5 border transition-all duration-300 ${
              selected === scenario.id
                ? 'bg-cyan-900/40 border-cyan-400 shadow-lg shadow-cyan-500/20'
                : 'bg-gray-800/60 border-gray-700 hover:border-cyan-600 hover:bg-gray-800/80'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{scenario.icon}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                scenario.role === '客户' ? 'bg-blue-500/20 text-blue-300' :
                scenario.role === '员工' ? 'bg-green-500/20 text-green-300' :
                'bg-purple-500/20 text-purple-300'
              }`}>
                {scenario.role}
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{scenario.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{scenario.description}</p>
            
            <AnimatePresence>
              {selected === scenario.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-700 pt-3 mt-3">
                    <p className="text-xs text-cyan-400 font-medium mb-2">核心任务：</p>
                    <ul className="space-y-1">
                      {scenario.tasks.map((task, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 bg-cyan-500/10 rounded-lg p-2">
                      <p className="text-xs text-cyan-300">📊 KPI: {scenario.kpi}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Flow diagram */}
      <div className="mt-8 bg-gray-800/40 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4 text-center">场景与角色的关系</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center min-w-[140px]">
            <div className="text-2xl mb-1">👤</div>
            <div className="text-blue-300 font-medium text-sm">客户</div>
            <div className="text-xs text-gray-400 mt-1">下单 · 运维</div>
          </div>
          <div className="flex items-center text-gray-500">→</div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center min-w-[140px]">
            <div className="text-2xl mb-1">👷</div>
            <div className="text-green-300 font-medium text-sm">员工</div>
            <div className="text-xs text-gray-400 mt-1">排产 · 维护 · 质检</div>
          </div>
          <div className="flex items-center text-gray-500">→</div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center min-w-[140px]">
            <div className="text-2xl mb-1">👔</div>
            <div className="text-purple-300 font-medium text-sm">管理层</div>
            <div className="text-xs text-gray-400 mt-1">决策 · 监控</div>
          </div>
        </div>
      </div>
    </div>
  );
}
