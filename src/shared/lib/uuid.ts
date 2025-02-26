/**
 * The function generates a random UUID (Universally Unique Identifier) string.
 * @returns A randomly generated UUID (Universally Unique Identifier) string in the format
 * 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' where each 'x' and 'y' is replaced with a random hexadecimal
 * digit.
 */
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
