import { solution1, solution2 } from './04数字分组求偶数和';

describe('04数字分组求偶数和', () => {
  it('test', () => {
    expect(solution1([123, 456, 789])).toBe(14);
    expect(solution1([123456789])).toBe(4);
    expect(solution1([14329, 7568])).toBe(10);

    expect(solution2([123, 456, 789])).toBe(14);
    expect(solution2([123456789])).toBe(4);
    expect(solution2([14329, 7568])).toBe(10);
  });
});
