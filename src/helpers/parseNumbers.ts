/**
 * Parse array of strings to numbers, filtering out NaN
 *
 * @param values Potential numbers (as strings)
 * @returns Array containing parsed numbers. Will filter out NaN.
 */
export default function parseNumbers(
  values: readonly string[] | null
): number[] {
  return (values || []).map((value) => +value).filter((value) => !isNaN(value));
}
