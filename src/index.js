// @flow

export const METERS_PER_KM = 1000;
export const METERS_PER_MILE = 1609.35;
export const FEET_PER_METER = 3.28084;

/**
 * formatDistance.js
 *
 * Consistently formats distance measurements, by stripping trailing
 * zeroes and restricting floats to at most 2 decimal places.
 */
export function formatDistance(
  distance: number | string,
  precision: number = 2
): string {
  // Trim trailing zeroes and format by converting to a number and then
  // converting back to a localized number string.
  return (+distance).toLocaleString([], {
    maximumFractionDigits: precision,
  });
}

/**
 * Round a number to the given level of precision.
 *
 * See:
 *    - https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript
 *    - https://stackoverflow.com/questions/10015027/javascript-tofixed-not-rounding/32605063#32605063
 */
export function round(distance: number, precision: number = 0) {
  return +(`${Math.round(+(`${distance}e${precision}`))}e${-precision}`);
}

/**
 * Conversion utils.
 */

export function milesToKm(miles: number, precision: number): number {
  return round((miles * METERS_PER_MILE) / METERS_PER_KM, precision);
}

export function metersToMiles(meters: number, precision: number = 2): number {
  return round(meters / METERS_PER_MILE, precision);
}

export function metersToFeet(meters: number, precision: number): number {
  return round(meters * FEET_PER_METER, precision);
}
