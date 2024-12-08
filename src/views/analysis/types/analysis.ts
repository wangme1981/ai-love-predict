// 测试结果类型定义
export interface TestResult {
  // 总体匹配度
  overallScore: number;
  
  // 各维度得分
  scores: {
    personality: number;
    values: number;
    lifestyle: number;
  };
  
  // 性格分析结果
  personalityAnalysis: {
    traits: string[];
    compatibility: string;
    conflicts: string[];
  };
  
  // 价值观分析
  valueAnalysis: {
    coreValues: string[];
    compatibility: string;
    differences: string[];
  };
  
  // 生活方式分析
  lifestyleAnalysis: {
    routineMatch: number;
    interests: string[];
    socialOverlap: number;
  };
  
  // 关系建议
  relationshipAdvice: {
    suggestions: string[];
    communicationTips: string[];
    developmentGuide: string[];
  };
  
  // 潜在问题
  potentialIssues: {
    severity: 'low' | 'medium' | 'high';
    issues: string[];
    preventions: string[];
  };
  
  // 改善建议
  improvements: {
    plans: string[];
    actions: string[];
    longTermGoals: string[];
  };
}

// 匹配度等级
export enum MatchLevel {
  Excellent = 'excellent',
  Good = 'good',
  Fair = 'fair',
  Poor = 'poor'
}

// 分析维度
export enum AnalysisDimension {
  Personality = 'personality',
  Values = 'values', 
  Lifestyle = 'lifestyle'
}

// 组件通用属性
export interface AnalysisProps {
  result: TestResult;
  loading?: boolean;
} 