import { numDecodings } from './91.解码方法';

describe('91.解码方法', () => {
  it('test', () => {
    expect(numDecodings('12')).toBe(2);
    expect(numDecodings('226')).toBe(3);
    expect(numDecodings('0')).toBe(0);
    expect(numDecodings('06')).toBe(0);
  });
});
