class EventEmitter {
  constructor() {
    this.events = {};
  }

  addEventListener(eventName, func) {
    if (typeof func !== "function") {
      throw new Error("This is not a function");
    }
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(func);
  }

  removeEventListener(eventName, func) {
    if (!events[eventName])
      throw new Error("there is no such event in the system");

    this.events[eventName].filter((somethingFunc) => {
      somethingFunc !== func;
    });
  }

  on(eventName, func) {
    this.addEventListener(eventName, func);
  }

  off(eventName, func) {
    this.removeEventListener(eventName, func);
  }

  once(eventName, func) {
    const wrapper = () => {
      func();
      this.removeEventListener(eventName, func);
    };
    this.on(eventName, wrapper);
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((func) => func.call(null, data));
    }
  }
}
