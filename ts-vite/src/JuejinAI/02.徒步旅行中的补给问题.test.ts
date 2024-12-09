import { solution1 } from './02.徒步旅行中的补给问题';

describe('02.徒步旅行中的补给问题-solution1', () => {
  it('test', () => {
    expect(solution1(5, 2, [1, 2, 3, 3, 2])).toBe(9);
    expect(solution1(6, 3, [4, 1, 5, 2, 1, 3])).toBe(9);
    expect(solution1(4, 1, [3, 2, 4, 1])).toBe(10);
  });
});

