import { describe, it, expect, vi } from "vitest";
import EventEmitter from "./event-emitter";

describe("EventEmitter", () => {
  it("should register and call event listeners", () => {
    const emitter = new EventEmitter();
    const listener = vi.fn();

    emitter.on("event", listener);
    emitter.emit("event", "arg1", "arg2");

    expect(listener).toHaveBeenCalled();
    expect(listener).toHaveBeenCalledWith("arg1", "arg2");
  });

  it("should support multiple listeners for the same event", () => {
    const emitter = new EventEmitter();
    const listener1 = vi.fn();
    const listener2 = vi.fn();

    emitter.on("event", listener1);
    emitter.on("event", listener2);
    emitter.emit("event", "arg1", "arg2");

    expect(listener1).toHaveBeenCalled();
    expect(listener2).toHaveBeenCalled();
    expect(listener1).toHaveBeenCalledWith("arg1", "arg2");
    expect(listener2).toHaveBeenCalledWith("arg1", "arg2");
  });

  it("should remove event listeners", () => {
    const emitter = new EventEmitter();
    const listener = vi.fn();

    emitter.on("event", listener);
    emitter.off("event", listener);
    emitter.emit("event", "arg1", "arg2");

    expect(listener).not.toHaveBeenCalled();
  });

  it("should handle removing non-existent listeners gracefully", () => {
    const emitter = new EventEmitter();
    const listener = vi.fn();

    emitter.off("event", listener); // Пытаемся удалить несуществующий listener
    emitter.emit("event", "arg1", "arg2");

    expect(listener).not.toHaveBeenCalled();
  });

  it("should handle events without listeners gracefully", () => {
    const emitter = new EventEmitter();

    emitter.emit("nonExistentEvent", "arg1", "arg2"); // Испускаем событие без слушателей

    // Нет утверждений, так как мы просто убеждаемся, что не было ошибок
  });

  it("should call once listener only once", () => {
    const emitter = new EventEmitter();
    const listener = vi.fn();

    emitter.once("event", listener);
    emitter.emit("event", "arg1", "arg2");
    emitter.emit("event", "arg3", "arg4");

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith("arg1", "arg2");
  });

  it("should not break if the listener throws", () => {
    const emitter = new EventEmitter();
    const listener = vi.fn();
    emitter.on("event", () => {
      throw new Error("test");
    });
    emitter.on("event", listener);
    emitter.emit("event");
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
