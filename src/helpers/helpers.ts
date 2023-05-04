type Indexed<T = any> = {
  [key in string]: T;
};

type StringIndexed = Record<string, any>;

export const isEqualTo = (lhs: string, rhs: string): boolean => lhs === rhs;

const isArray = (value: any): any => {
  return Array.isArray(value);
};

const isPlainObject = (value: any): any => {
  return (
    typeof value === "object" &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
};

const isArrayOrObject = (value: any): any => {
  return isPlainObject(value) || isArray(value);
};

export default function isEqual(lhs: any, rhs: any): boolean {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        // eslint-disable-next-line no-continue
        continue;
      }
      return false;
    }
    if (value !== rightValue) {
      return false;
    }
  }

  return true;
}

export function set(
  object: Indexed | any,
  path: string,
  value: any
): Indexed | unknown {
  if (typeof object !== "object" || object === null) {
    return object;
  }

  if (typeof path !== "string") {
    return new Error("path must be string");
  }

  const result = path.split(".").reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as any
  );

  return merge(object as Indexed, result);
}

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    // eslint-disable-next-line no-prototype-builtins
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function trim(value: string, args?: string): string {
  let sub: string[];
  if (args) {
    sub = [String.fromCharCode(160), ...args];
  } else {
    sub = [String.fromCharCode(160)];
  }

  while (sub.some((x) => value[0] == x)) {
    value = value.substr(1);
  }

  while (sub.some((x) => value[value.length - 1] == x)) {
    value = value.substr(0, value.length - 1);
  }
  console.log(value);

  return value;
}

export function queryStringify(data: StringIndexed): string | never {
  if (typeof data !== "object") {
    throw new Error("Data must be object");
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    const value = data[key];
    const endLine = index < keys.length - 1 ? "&" : "";

    if (Array.isArray(value)) {
      const arrayValue = value.reduce<StringIndexed>(
        (result, arrData, index) => ({
          ...result,
          [`${key}[${index}]`]: arrData,
        }),
        {}
      );

      return `${result}${queryStringify(arrayValue)}${endLine}`;
    }

    if (typeof value === "object") {
      const objValue = Object.keys(value || {}).reduce<StringIndexed>(
        (result, objKey) => ({
          ...result,
          [`${key}[${objKey}]`]: value[objKey],
        }),
        {}
      );

      return `${result}${queryStringify(objValue)}${endLine}`;
    }

    return `${result}${key}=${value}${endLine}`;
  }, "");
}
