const React = require('react');
const Faye = require('faye');
const App = require('./components/App').App;

window.client = new Faye.Client('http://192.168.1.159:8001/');
window.name = 'test';
window.vetos = {};
window.picks = {};
window.pickorder = [];
window.pickindex = [];
window.pools = [];
window.waitingForVeto = false;
window.justPicked;

client.subscribe('/room1', function(message) {
  switch (message.type) {
    case 'pools':
      pools = message.pools;
    break;
    case 'timer':
      alert('Time Up!');
      if (waitingForVeto) {
        alert('Pick good!');
        waitingForVeto = false;
        pass();
      } else if (pickorder[pickindex] === name) {
        makePick(pools.length - 5)
      }
    break;
    case 'veto':
      delete picks[justPicked];
    break;
    case 'pick':
      picks[message.from] = message.index;
      window.justPicked = message.from;
      waitingForVeto = true;
    break;
    case 'newUserList':
      pickorder = message.pickorder;
      vetos = message.vetos;
    break;
    case 'newPicker':
      if (pickorder[message.pickindex] === name) {
        alert('Your Turn!');
      }
      pickindex = message.pickindex;
    break;
  }
  React.render(<App />, document.getElementById('app'));
});

function register(newName) {
  client.publish('/room1', {type: 'register', from: newName})
  name = newName;
}

function veto() {
  client.publish('/room1', {type: 'veto', from: name})
}

function pass() {
  client.publish('/room1', {type: 'pass', from: name})
}

function makePick(index) {
  client.publish('/room1', {type: 'pick', index: index, from: name})
}

setTimeout(function () {
  client.publish('/room1', {type: 'getPools', from: name})

  name = prompt('What is your name', '')
  register(name);

  pass();
}, 2500)

window.makePick = makePick
window.pass = pass
window.veto = veto
