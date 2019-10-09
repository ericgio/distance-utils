import {
  formatDistance,
  metersToMiles,
  metersToFeet,
  milesToKm,
  round,
} from '.';

describe('distanceUtils', () => {
  test('rounds a number to the specified level of precision', () => {
    expect(round(4.006)).toBe(4);
    expect(round(4.006, 2)).toBe(4.01);
    expect(round(4060, -2)).toBe(4100);
  });

  test('converts meters into feet', () => {
    expect(metersToFeet(1582)).toBe(5190);
    expect(metersToFeet(1, 2)).toBe(3.28);
  });

  test('converts meters into miles', () => {
    expect(metersToMiles(10000)).toBe(6.21);
    expect(metersToMiles(10000, 1)).toBe(6.2);
  });

  test('converts miles to kilometers', () => {
    expect(milesToKm(6.21)).toBe(10);
    expect(milesToKm(6.21, 1)).toBe(10.0);
  });

  test('correctly formats distances', () => {
    expect(formatDistance(1.00)).toBe('1');
    expect(formatDistance(1.3333)).toBe('1.33');
    expect(formatDistance('1.50')).toBe('1.5');
    expect(formatDistance(1000)).toBe('1,000');
  });
});
