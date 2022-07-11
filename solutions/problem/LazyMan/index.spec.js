import { describe, expect, it } from "vitest";
import { LazyMan } from "./index.js";

describe("LazyMan测试", () => {
  it("LazyMan", () => {
    const me = new LazyMan("Tom");
    me.eat("dinner").sleep(3).eat("lunch");
  });
});
