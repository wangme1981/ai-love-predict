import type { TestResult } from '../views/analysis/types/analysis'

export class TestService {
  // 获取测试结果
  static async getTestResult(testId: string): Promise<TestResult> {
    try {
      const response = await fetch(`/api/test-results/${testId}`)
      if (!response.ok) {
        throw new Error('获取测试结果失败')
      }
      return await response.json()
    } catch (error) {
      console.error('API请求失败:', error)
      throw error
    }
  }
  
  // 更新测试结果
  static async updateTestResult(testId: string, data: Partial<TestResult>): Promise<void> {
    try {
      const response = await fetch(`/api/test-results/${testId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) {
        throw new Error('更新测试结果失败')
      }
    } catch (error) {
      console.error('API请求失败:', error)
      throw error
    }
  }
}

export default TestService 