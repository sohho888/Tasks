import { describe, test, expect } from "vitest";
import { render } from "./marckdown";

/**
 * Example:
 * includeOnly = [1,2,3]
 * Do not forget to clean it out before push so all tests will run
 */
const includeOnly = [];

describe("render", () => {
  test.each(
    [
      {
        input: {
          type: "document",
          content: ["hello"],
        },
        output: "hello",
      },
      {
        input: {
          type: "document",
          content: [{ type: "paragraph", content: ["hello"] }],
        },
        output: "hello\n",
      },
      {
        input: {
          type: "document",
          content: [
            {
              type: "paragraph",
              content: [{ type: "bold", content: ["hello"] }],
            },
          ],
        },
        output: "**hello**\n",
      },
      {
        input: {
          type: "document",
          content: [{ type: "heading", content: ["hello"] }],
        },
        output: "# hello\n",
      },
      {
        input: {
          type: "document",
          content: [
            {
              type: "paragraph",
              content: [
                { type: "bold", content: ["hello"] },
                { type: "italic", content: ["world"] },
              ],
            },
          ],
        },
        output: "**hello**_world_\n",
      },
      {
        input: {
          type: "document",
          content: [
            {
              type: "paragraph",
              content: ["hello"],
            },
            {
              type: "paragraph",
              content: ["world"],
            },
          ],
        },
        output: "hello\nworld\n",
      },
      {
        input: {
          type: "document",
          content: [
            {
              type: "heading",
              content: ["First section"],
            },
            {
              type: "paragraph",
              content: [
                "I am content, can be ",
                {
                  type: "bold",
                  content: ["bold"],
                },
                " or ",
                {
                  type: "italic",
                  content: ["italic"],
                },
                ".",
              ],
            },
            {
              type: "heading",
              content: ["Second section"],
            },
            {
              type: "paragraph",
              content: ["I'm a simple text, nothing special"],
            },
            {
              type: "paragraph",
              content: ["Yet another paragraph"],
            },
          ],
        },
        output:
          "# First section\nI am content, can be **bold** or _italic_.\n# Second section\nI'm a simple text, nothing special\nYet another paragraph\n",
      },
    ].filter((_, idx) =>
      includeOnly.length === 0 ? true : includeOnly.includes(idx + 1),
    ),
  )("%#", ({ input, output }) => {
    expect(render(input)).toBe(output);
  });
});
