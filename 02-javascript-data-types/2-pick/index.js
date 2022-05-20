/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const subset = Object.fromEntries(fields.filter(key => key in obj).map(key => [key, obj[key]]));
  return subset;
};
