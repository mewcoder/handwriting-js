import { describe, expect, it } from "vitest";
import { _new } from "./index.js";

describe("原型相关测试", () => {
  it("_new", () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
      return null;
    }
    const person1 = new Person("Lee", 21);
    console.log(person1);
    const person2 = _new(Person, "Lee", 21);
    expect(person1).toEqual(person2);
    expect(person1.__proto__).toBe(Person.prototype);
  });
});
