/**
 * Filter out null/undefined
 *
 * @param value Array with values potentially null/undefined
 * @returns Array without null/undefined
 */
export default function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value != null;
}
