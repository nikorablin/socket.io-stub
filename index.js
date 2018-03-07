export default class SocketStub {
  constructor(props = {}) {
    this.events = {};
    this.emitted = [];
    Object.assign(this, props);
  }

  on(event, handler) {
    this.events[event] = handler;
  }

  emit(event, payload) {
    this.emitted = [
      ...this.emitted,
      payload
    ];
  }

  simulate(event, payload) {
    this.events[event](payload);
  }

  clear() {
    this.emitted = [];
  }
}
