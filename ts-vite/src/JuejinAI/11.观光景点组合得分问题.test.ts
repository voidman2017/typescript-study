import { solution1 } from './11.观光景点组合得分问题';

describe('11.观光景点组合得分问题', () => {
  it('test', () => {
    expect(solution1([8, 3, 5, 5, 6])).toBe(11);
    expect(solution1([10, 4, 8, 7])).toBe(16);
    expect(solution1([1, 2, 3, 4, 5])).toBe(8);
  });
});
