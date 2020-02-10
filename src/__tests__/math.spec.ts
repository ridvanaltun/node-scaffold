import Math from '../example/math';

describe('Math', () => {
  describe('Basic function test', () => {
  test('sum', () => {
      expect(Math.sum(1, 2)).toBe(3);
    });

    test('mul', () => {
      expect(Math.mul(1, 2)).toBe(2);
    });

    test('sub', () => {
      expect(Math.sub(2, 2)).toBe(0);
    });

    test('div', () => {
      expect(Math.div(2, 1)).toBe(2);
    });

    test('sqr', () => {
      expect(Math.sqr(2)).toBe(4);
    });
  });
});
