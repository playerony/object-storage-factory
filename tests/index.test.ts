import { objectStorageFactory } from '..';

describe('objectStorageFactory Function', () => {
  let storage: Storage;

  beforeEach(() => {
    storage = objectStorageFactory();
  });

  test('should import', () => {
    expect(typeof objectStorageFactory).toEqual('function');
  });

  describe('setItem and getItem', () => {
    it('sets values and returns', () => {
      expect(storage.setItem('foo', 'Foo')).toBeUndefined();
      expect(storage.getItem('foo')).toEqual('Foo');

      expect(storage.setItem('empty', '')).toBeUndefined();
      expect(storage.getItem('empty')).toEqual('');
    });

    it('should throw an error when passed key or value is not a string', () => {
      // @ts-ignore
      expect(() => storage.getItem(null)).toThrow('[getItem] key must be a string');

      // @ts-ignore
      expect(() => storage.setItem(null, '123')).toThrow('[setItem] key must be a string');

      // @ts-ignore
      expect(() => storage.setItem('123', null)).toThrow('[setItem] value must be a string');
    });
  });

  describe('removeItem', () => {
    it('remove values', () => {
      expect(storage.setItem('foo', 'foo')).toBeUndefined();
      expect(storage.getItem('foo')).toEqual('foo');

      storage.removeItem('foo');
      expect(storage.getItem('foo')).toBeNull();
    });

    it('should throw an error when passed key is not a string', () => {
      // @ts-ignore
      expect(() => storage.removeItem(null)).toThrow('[removeItem] key must be a string');
    });
  });

  describe('key', () => {
    it('return key by index', () => {
      storage.setItem('x', 'foo');

      expect(storage.key(0)).toEqual('x');
      expect(storage.key(1)).toBeNull();
    });

    it('should throw an error when passed index is not a number', () => {
      // @ts-ignore
      expect(() => storage.key(null)).toThrow('[key] index must be a number');
    });
  });

  describe('length and clear', () => {
    it('should pass', () => {
      storage.setItem('1', 'foo');
      storage.setItem('2', 'foo');
      storage.setItem('3', 'foo');
      storage.setItem('4', 'foo');

      expect(storage.length).toEqual(4);
      storage.clear();
      expect(storage.length).toEqual(0);
    });
  });
});
