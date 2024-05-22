import { describe, test, expect } from "vitest";
import { serialize, deserialize } from "./serialize";

const includeOnly = [];

const tests = [
  { input: { value: 100 }, output: "100,null,null" },
  {
    input: { value: 100, left: { value: 80 } },
    output: "100,80,null,null,null",
  },
  {
    input: { value: 100, right: { value: 120 } },
    output: "100,null,120,null,null",
  },
  {
    input: { value: 100, left: { value: 80, right: { value: 90 } } },
    output: "100,80,null,90,null,null,null",
  },
  {
    input: {
      value: 100,
      left: {
        value: 80,
        left: { value: 70, left: { value: 60 } },
        right: { value: 90, right: { value: 120 } },
      },
    },
    output: "100,80,70,60,null,null,null,90,null,120,null,null,null",
  },
].filter((_, idx) =>
  includeOnly.length === 0 ? true : includeOnly.includes(idx + 1),
);

describe("serialize", () => {
  test.each(tests)("%#", ({ input, output }) => {
    expect(serialize(input)).toBe(output);
  });
});

describe("deserialize", () => {
  test.each(tests)("%#", ({ input, output }) => {
    expect(deserialize(output)).toEqual(input);
  });

  test("bad format", () => {
    expect(() => deserialize("100,80,null")).toThrowError("bad format");
  });
});
