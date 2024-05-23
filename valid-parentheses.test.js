import { describe, test, expect } from "vitest";
import { validateBrackets } from "./valid-parentheses";

const includeOnly = [];

const tests = [
  { input: "()", output: true },
  { input: "([{}])", output: true },
  { input: "(]", output: false },
  { input: "([)]", output: false },
  { input: "{[()]}", output: true },
].filter((_, idx) =>
  includeOnly.length === 0 ? true : includeOnly.includes(idx + 1),
);

describe("validateBrackets", () => {
  test.each(tests)("%#", ({ input, output }) => {
    expect(validateBrackets(input)).toBe(output);
  });

  describe("complex real-world examples", () => {
    test("correct code", () => {
      // we are testing the code of this file!
      const code = `import { describe, test, expect } from "vitest";
      import { validateBrackets } from "./valid-parentheses";
      
      const includeOnly = [];
      
      const tests = [
        { input: "()", output: true },
        { input: "([{}])", output: true },
        { input: "(]", output: false },
        { input: "([)]", output: false },
        { input: "{[()]}", output: true },
      ].filter((_, idx) =>
        includeOnly.length === 0 ? true : includeOnly.includes(idx + 1),
      );
      
      describe("validateBrackets", () => {
        test.each(tests)("%#", ({ input, output }) => {
          expect(validateBrackets(input)).toBe(output);
        });
      
        test('actual code (complex example)', () => {
      
        })
      });`;
      expect(validateBrackets(code)).toBe(true);
    });

    test("broken code", () => {
      const code = `const tests = [
        input: "()", output: true },
        { input: "([{}])", output: true },
        { input: "(]", output: false },
        { input: "([)]", output: false },
        { input: "{[()]}", output: true },
      ].filter((_, idx) =>
        includeOnly.length === 0 ? true : includeOnly.includes(idx + 1),
      );`;
      expect(validateBrackets(code)).toBe(false);
    });
  });
});
