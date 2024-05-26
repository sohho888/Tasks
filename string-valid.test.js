import { describe, test, expect } from "vitest";
import { insertingString } from "./string-valid";

const includeOnly = [];

const tests = [
  { input: "", output: true },
  { input: "abc", output: true },
  { input: "aabcbc", output: true },
  { input: "aabcbabcc", output: true },
  { input: "abcabcababccababcc", output: true },
  { input: "ababcacb", output: false },
  { input: "abca", output: false },
  { input: "aabcc", output: false },
].filter((_, idx) =>
  includeOnly.length === 0 ? true : includeOnly.includes(idx + 1),
);

describe("string-valid", () => {
  test.each(tests)("%#", ({ input, output }) => {
    expect(insertingString(input)).toBe(output);
  });
});