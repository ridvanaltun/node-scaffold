/**
 * Provide functions for calculations.
 *
 * @class Math
 */
class Math {
  /**
   * Adds the two given values.
   *
   * @param a number
   * @param b number
   *
   * @returns number
   */
  sum = (a: number, b: number): number => a + b;

  /**
   * Multiplies the two given values.
   *
   * @param a number
   * @param b number
   *
   * @returns number
   */
  mul = (a: number, b: number): number => a * b;

  /**
   * Subtracts the two given values.
   *
   * @param a number
   * @param b number
   *
   * @returns number
   */
  sub = (a: number, b: number): number => a - b;

  /**
   * Divides the two given values.
   *
   * @param a number
   * @param b number
   *
   * @returns number
   */
  div = (a: number, b: number): number => a / b;

  /**
   * Squares the given value.
   *
   * @param a number
   *
   * @returns number
   */
  sqr = (a: number): number => a * a;
}

export default Math;
