import { describe, test, expect, vi } from "vitest";
import { debounce } from "./debounce";

describe("debounce", () => {
  test("called after 1000ms", () => {
    let i = 0;
    function increment() {
      i++;
    }
    const updateDebouce = debounce(increment, 1000);

    vi.useFakeTimers();
    // call the function a few times
    updateDebouce();
    updateDebouce();
    updateDebouce();

    vi.runAllTimers();
    // check it's been called once
    expect(i).toBe(1);
  });

  test("preserves this", () => {
    let loggedX;
    function callback() {
      loggedX = this.x;
    }
    const debounced = debounce(callback, 1000);
    vi.useFakeTimers();
    // this inside callback should be { x: 'x' }
    debounced.call({ x: "x" });
    vi.runAllTimers();
    expect(loggedX).toBe("x");
  });

  test("passes arguments", () => {
    let loggedArgs = [];
    function callback(x, y, z) {
      loggedArgs.push(x, y, z);
    }
    const debounced = debounce(callback, 1000);
    vi.useFakeTimers();
    debounced("a", "b", "c");
    vi.runAllTimers();
    expect(loggedArgs).toStrictEqual(["a", "b", "c"]);
  });
});
