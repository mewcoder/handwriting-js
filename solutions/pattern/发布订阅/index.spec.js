import { describe, expect, it } from "vitest";
import { EventEmitter } from "./index.js";

describe("发布订阅测试", () => {
  it("EventEmitter", () => {
    const emmiter = new EventEmitter();
    let a = 0;
    emmiter.on("test", () => {
      a += 1;
    });
    emmiter.on("test", () => {
      a += 2;
    });
    emmiter.emit("test");
    emmiter.emit("test");
    expect(a).toBe(6);
  });
});
