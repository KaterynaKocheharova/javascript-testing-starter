import { describe, it, expect, test } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
});

describe("max", () => {
  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
});
