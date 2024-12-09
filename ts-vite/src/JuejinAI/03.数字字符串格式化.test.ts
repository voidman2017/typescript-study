import { solution } from './03.数字字符串格式化';

describe('03.数字字符串格式化', () => {
  it('test', () => {
    expect(solution('1294512.12412')).toBe('1,294,512.12412');
    expect(solution('0000123456789.99')).toBe('123,456,789.99');
    expect(solution('987654321')).toBe('987,654,321');
  });
});
