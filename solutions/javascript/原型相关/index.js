const isObject = (obj) => {
  return typeof obj === "object" && obj !== null;
};
const isFunction = (obj) => {
  return typeof obj === "function";
};

/**
 *
 * @param {*} Fn
 * @param  {...any} args
 * @returns object
 */
export function _new(Fn, ...args) {
  if (!isFunction(Fn)) {
    throw new TypeError("Fn must be a function!");
  }
  const obj = {};
  obj.__proto__ = Fn.prototype;
  // 前两行可以换成 obj = Object.create(Fn.prototype)
  const res = Fn.apply(obj, args);
  return isObject(res) || isFunction(res) ? res : obj;
}

/**
 *
 * @param {*} obj
 * @returns obj
 */
export function create(obj) {
  function Fn() {}
  Fn.prototype = obj;
  return new Fn();
}
