/**
 * @packageDocumentation Object storage factory implemented with the same interface as browser's local storage.
 */

/**
 * This interface provides access to object storage. It allows, for example, the addition, modification, or deletion of stored data items.
 *
 * @public
 */
export function objectStorageFactory(): Storage {
  let memoryStorage: Record<string, string> = {};

  /**
   * Removes all key/value pairs, if there are any.
   */
  function clear(): void {
    memoryStorage = {};
  }

  /**
   * Returns the current value associated with the given key, or null if the given key does not exist.
   */
  function getItem(key: string): string | null {
    if (typeof key !== 'string') {
      throw new TypeError('[getItem] key must be a string');
    }

    const value = memoryStorage[key];

    return typeof value === 'string' ? value : null;
  }

  /**
   * Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs.
   */
  function key(index: number): string | null {
    if (typeof index !== 'number') {
      throw new TypeError('[key] index must be a number');
    }

    const keys = Object.keys(memoryStorage);

    const value = keys[index];
    return value ? value : null;
  }

  /**
   * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
   */
  function removeItem(key: string): void {
    if (typeof key !== 'string') {
      throw new TypeError('[removeItem] key must be a string');
    }

    delete memoryStorage[key];
  }

  /**
   * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
   */
  function setItem(key: string, value: string): void {
    if (typeof key !== 'string') {
      throw new TypeError('[setItem] key must be a string');
    }

    if (typeof value !== 'string') {
      throw new TypeError('[setItem] value must be a string');
    }

    memoryStorage[key] = value;
  }

  /**
   * Returns the number of key/value pairs.
   */
  function length(): number {
    const keys = Object.keys(memoryStorage);

    return keys.length;
  }

  return {
    key,
    clear,
    getItem,
    setItem,
    removeItem,
    get length() {
      return length();
    },
  };
}
