import chai from 'chai';
import SocketStub from './index.js';

const expect = chai.expect;

const manager = socket => {
  socket.on('ping', payload => socket.emit('pong', payload));
};

describe('SocketStub', () => {
  let socket;
  beforeEach(() => {
    socket = new SocketStub();
    manager(socket);
  });

  it('should keep track of single emitted event', () => {
    socket.simulate('ping', 1);
    expect(socket.emitted.length).to.equal(1);
    expect(socket.emitted).to.eql([['pong', 1]]);
  });

  it('should keep track of multiple emitted events', () => {
    socket.simulate('ping', 1);
    socket.simulate('ping', 2);
    expect(socket.emitted.length).to.equal(2);
    expect(socket.emitted).to.eql([['pong', 1], ['pong', 2]]);
  });

  it('clear() should remove all emitted actions', () => {
    socket.simulate('ping', 1);
    expect(socket.emitted.length).to.equal(1);
    socket.clear();
    expect(socket.emitted.length).to.equal(0);
  });

  it('constructor should take in props and assign as properties of socket', () => {
    socket = new SocketStub({ userId: 1 });
    expect(socket.userId).to.equal(1);
  });
});
