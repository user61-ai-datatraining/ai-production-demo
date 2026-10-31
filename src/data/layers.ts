export interface Scenario {
  id: string;
  title: string;
  icon: string;
  role: '客户' | '员工' | '管理层';
  description: string;
  tasks: string[];
  kpi: string;
}

export interface ProcessStep {
  id: string;
  name: string;
  duration: string;
  owner: string;
  inputs: string[];
  outputs: string[];
}

export interface DataMetric {
  id: string;
  name: string;
  category: string;
  source: string;
  frequency: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
  description: string;
}

export interface TechComponent {
  id: string;
  name: string;
  category: string;
  vendor: string;
  function: string;
  connections: string[];
}

export const scenarios: Scenario[] = [
  {
    id: 's1',
    title: '定制化机器人下单',
    icon: '🛒',
    role: '客户',
    description: '客户通过数字化平台配置机器人参数，实时获取报价与交期',
    tasks: ['选择机器人型号', '配置功能模块', '在线3D预览', '获取实时报价', '确认订单并跟踪'],
    kpi: '订单转化率 92%'
  },
  {
    id: 's2',
    title: '智能排产调度',
    icon: '📋',
    role: '员工',
    description: '生产计划员通过AI辅助系统完成多约束排产优化',
    tasks: ['查看产能负荷', 'AI推荐排产方案', '调整优先级', '下发工单到产线', '实时监控进度'],
    kpi: '排产效率提升 40%'
  },
  {
    id: 's3',
    title: '设备预测性维护',
    icon: '🔧',
    role: '员工',
    description: '设备工程师基于传感器数据提前识别故障风险并安排维护',
    tasks: ['查看设备健康度', '接收预警通知', '分析故障根因', '安排维护工单', '验证修复效果'],
    kpi: '非计划停机减少 65%'
  },
  {
    id: 's4',
    title: '质量追溯分析',
    icon: '🔍',
    role: '员工',
    description: '质量工程师通过全链路追溯快速定位质量问题的根因',
    tasks: ['扫描产品二维码', '查看生产参数', '对比标准值', '定位异常工序', '生成质量报告'],
    kpi: '质量追溯时间 < 3分钟'
  },
  {
    id: 's5',
    title: '供应链协同管理',
    icon: '🔗',
    role: '管理层',
    description: '采购经理实时掌握供应商状态，智能决策补货策略',
    tasks: ['监控库存水位', '供应商绩效评估', '自动生成采购建议', '协同物流跟踪', '风险预警处理'],
    kpi: '库存周转率提升 30%'
  },
  {
    id: 's6',
    title: '远程运维服务',
    icon: '📡',
    role: '客户',
    description: '客户通过远程平台监控已部署机器人的运行状态',
    tasks: ['查看设备运行状态', '接收维保提醒', '远程诊断问题', '预约上门服务', '查看服务报告'],
    kpi: '客户满意度 96%'
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: 'p1',
    name: '需求接收',
    duration: '0.5天',
    owner: '销售部',
    inputs: ['客户需求', '市场预测'],
    outputs: ['订单确认书', 'BOM清单']
  },
  {
    id: 'p2',
    name: '方案设计',
    duration: '2天',
    owner: '研发部',
    inputs: ['订单确认书', '技术规格'],
    outputs: ['设计方案', '工艺路线', '数字孪生模型']
  },
  {
    id: 'p3',
    name: '物料采购',
    duration: '5天',
    owner: '采购部',
    inputs: ['BOM清单', '供应商目录'],
    outputs: ['采购订单', '物料到货确认']
  },
  {
    id: 'p4',
    name: '生产制造',
    duration: '7天',
    owner: '生产部',
    inputs: ['工艺路线', '物料', '设备'],
    outputs: ['半成品', '过程数据', '质检记录']
  },
  {
    id: 'p5',
    name: '装配测试',
    duration: '3天',
    owner: '质量部',
    inputs: ['半成品', '测试方案'],
    outputs: ['合格产品', '测试报告', '合格证书']
  },
  {
    id: 'p6',
    name: '交付部署',
    duration: '2天',
    owner: '物流部',
    inputs: ['合格产品', '部署方案'],
    outputs: ['安装完成确认', '用户培训记录']
  },
  {
    id: 'p7',
    name: '运维服务',
    duration: '持续',
    owner: '服务部',
    inputs: ['运行数据', '客户反馈'],
    outputs: ['维保计划', '升级方案', '满意度报告']
  }
];

export const dataMetrics: DataMetric[] = [
  { id: 'd1', name: 'OEE设备综合效率', category: '生产', source: 'MES系统', frequency: '实时', value: '87.3%', trend: 'up', description: '综合衡量设备可用率、性能率和良品率' },
  { id: 'd2', name: '一次合格率', category: '质量', source: 'QMS系统', frequency: '每批次', value: '98.6%', trend: 'up', description: '产品首次通过全部检测项目的比例' },
  { id: 'd3', name: '订单准时交付率', category: '交付', source: 'ERP系统', frequency: '每日', value: '95.2%', trend: 'stable', description: '按承诺时间完成交付的订单占比' },
  { id: 'd4', name: '能耗效率', category: '生产', source: 'IoT平台', frequency: '实时', value: '12.5kWh/台', trend: 'down', description: '单台机器人生产的平均能耗' },
  { id: 'd5', name: '库存周转天数', category: '供应链', source: 'WMS系统', frequency: '每周', value: '18天', trend: 'down', description: '从入库到出库的平均天数' },
  { id: 'd6', name: '设备故障率', category: '设备', source: 'IoT平台', frequency: '实时', value: '0.3%', trend: 'down', description: '设备发生故障的时间占比' },
  { id: 'd7', name: '人均产出', category: '效率', source: 'MES系统', frequency: '每月', value: '¥285万/人', trend: 'up', description: '每位员工月度创造的平均产值' },
  { id: 'd8', name: '客户NPS', category: '客户', source: 'CRM系统', frequency: '每月', value: '72', trend: 'up', description: '客户净推荐值，衡量客户忠诚度' },
  { id: 'd9', name: '数据采集覆盖率', category: '数字化', source: 'IoT平台', frequency: '实时', value: '99.2%', trend: 'up', description: '关键设备数据点的采集完整度' },
  { id: 'd10', name: '预测维护准确率', category: '智能化', source: 'AI引擎', frequency: '每日', value: '91.5%', trend: 'up', description: '预测性维护模型的故障预判准确度' }
];

export const techComponents: TechComponent[] = [
  { id: 't1', name: '工业IoT平台', category: '感知层', vendor: '自建+华为云IoT', function: '设备连接、数据采集、边缘计算', connections: ['MES', '数字孪生', 'AI引擎'] },
  { id: 't2', name: 'MES制造执行系统', category: '执行层', vendor: '西门子Opcenter', function: '工单管理、工序追踪、质量管控', connections: ['ERP', 'IoT平台', 'WMS'] },
  { id: 't3', name: 'ERP企业资源计划', category: '管理层', vendor: 'SAP S/4HANA', function: '财务、采购、销售、库存一体化', connections: ['MES', 'CRM', 'PLM'] },
  { id: 't4', name: '数字孪生平台', category: '仿真层', vendor: '达索3DEXPERIENCE', function: '产品/产线虚拟仿真、工艺优化', connections: ['MES', 'IoT平台', 'PLM'] },
  { id: 't5', name: 'AI/ML智能引擎', category: '智能层', vendor: '自建+阿里云PAI', function: '预测维护、视觉质检、排产优化', connections: ['IoT平台', 'MES', 'QMS'] },
  { id: 't6', name: 'WMS仓储管理', category: '物流层', vendor: '唯智信息', function: '库位管理、AGV调度、出入库', connections: ['ERP', 'MES', 'IoT平台'] },
  { id: 't7', name: 'PLM产品生命周期', category: '研发层', vendor: 'PTC Windchill', function: 'BOM管理、变更管理、协同设计', connections: ['ERP', 'MES', '数字孪生'] },
  { id: 't8', name: 'SCADA监控系统', category: '控制层', vendor: '施耐德EcoStruxure', function: '产线实时监控、报警管理、远程控制', connections: ['IoT平台', 'MES'] },
  { id: 't9', name: '数据中台', category: '数据层', vendor: '自建+Apache生态', function: '数据集成、数据治理、指标管理', connections: ['ERP', 'MES', 'IoT平台', 'AI引擎'] },
  { id: 't10', name: '低代码应用平台', category: '应用层', vendor: '明道云', function: '快速搭建业务应用、流程审批', connections: ['ERP', 'MES', 'CRM'] }
];
