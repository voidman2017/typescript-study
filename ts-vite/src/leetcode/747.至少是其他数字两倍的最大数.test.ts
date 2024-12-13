import { dominantIndex } from './747.至少是其他数字两倍的最大数';

describe('747.至少是其他数字两倍的最大数', () => {
  it('test', () => {
    expect(dominantIndex([3,6,1,0])).toBe(1);
    expect(dominantIndex([1,2,3,4])).toBe(-1);
    
    // 新增测试用例
    // 边界情况：最小长度为2的数组
    expect(dominantIndex([1,2])).toBe(1);
    expect(dominantIndex([5,2])).toBe(0);
    
    // 包含0的情况
    expect(dominantIndex([1,0])).toBe(0);
    
    // 最大值在不同位置
    expect(dominantIndex([1,0,0,100])).toBe(3);
    expect(dominantIndex([100,2,3,4])).toBe(0);
    
    // 刚好是两倍和略小于两倍的情况
    expect(dominantIndex([5,2,1])).toBe(0);
    expect(dominantIndex([5,3,1])).toBe(-1);
  });
});
