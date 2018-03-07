# Socket.io Stub

A socket stub to use when testing [socket.io](https://socket.io/) code

### Using the Stub

```js
const manager = socket => {
  socket.on('ping', payload => socket.emit('pong', payload));
};

describe('Testing socket', () => {
  it('ping will pong', () => {
    const socket = new SocketStub();
    manager(socket);
    socket.simulate('ping', true);
    expect(socket.emitted.length).to.equal(1);
    expect(socket.emitted).to.eql([['pong', true]]);
  });
});
```

### Installation

```
npm i socket.io-stub --save-dev
```

```
yarn add socket.io-stub --dev
```

### Tests

```
yarn test
```

### Methods

**new(properties: ?object)**

Instantiate a new socket stub. You can pass a properties object into the constructor to apply properties on the Socket

**simulate(event: string, payload: any)**

Simulate an event on the socket

**clear**

Clear all tracked emitted events from socket
