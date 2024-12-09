import { solution1, solution2 } from './01.找单独的数';

describe('01.找单独的数-solution1', () => {
  it('test', () => {
    expect(solution1([1, 1, 2, 2, 3, 3, 4, 5, 5])).toBe(4);
    expect(solution1([0, 1, 0, 1, 2])).toBe(2);
  });
});

describe('01.找单独的数-solution2', () => {
  it('test', () => {
    expect(solution2([1, 1, 2, 2, 3, 3, 4, 5, 5])).toBe(4);
    expect(solution2([0, 1, 0, 1, 2])).toBe(2);
    expect(solution2([0, 1, 1])).toBe(0);
  });
});
