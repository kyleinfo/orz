export function getTypeof(val?: unknown) {
  if (val === null) return 'null';
  const type = typeof val;
  if (type === 'function' || type === 'object') {
    if (Array.isArray && Array.isArray(val)) {
      return 'array';
    }
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
  } else {
    return type;
  }
}

export function isFunction(val?: unknown): val is Function {
  return getTypeof(val) === 'function';
}

export function isString(val?: unknown): val is string {
  return getTypeof(val) === 'string';
}

export function isArray<T>(val: unknown): val is Array<T> {
  return getTypeof(val) === 'array';
}

export function isUndefind(val: unknown): val is undefined {
  return getTypeof(val) === 'undefind';
}
