const React = require('react');
const Faye = require('faye');
const App = require('./components/App').App;

window.client = new Faye.Client('http://localhost:8001/');
window.name = 'test';
window.vetos = {};
window.picks = {};
window.banned = {};
window.pickorder = [];
window.pickindex = [];
window.pools = [];
var noPoolsYet = true;
window.waitingForVeto = false;
window.justPicked;
window.done = false;

client.subscribe('/room1', function(message) {
  switch (message.type) {
    case 'pools':
      pools = message.pools;
    break;
    case 'timerStart':
      console.log('timerStart', message)
      window.timerTime = message.length / 1000
    break;
    case 'timer':
      if (waitingForVeto) {
        waitingForVeto = false;
        if (pickorder[pickindex] === name) {
          window.justPicked = null;
          pass();
        }
      } else if (pickorder[pickindex] === name) {
        makePick(pools.length - 5)
      }
    break;
    case 'veto':
      waitingForVeto = false;
      delete picks[justPicked];
    break;
    case 'ban':
      banned[message.index] = true;
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
      pickindex = message.pickindex;
    break;
    case 'done':
      alert('All Done!');
      window.done = true;
    break;
  }
  if (message.type !== 'pools' || noPoolsYet) {
    noPoolsYet = false;
    React.render(<App />, document.getElementById('app'));
  }
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

function ban(index) {
  client.publish('/room1', {type: 'ban', index: index, from: name})
}

setTimeout(function () {
  client.publish('/room1', {type: 'getPools', from: name})

  name = prompt('What is your name', '')
  register(name);
}, 2500)

window.makePick = makePick
window.pass = pass
window.veto = veto
