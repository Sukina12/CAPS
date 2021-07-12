'use strict';

const events = require('./events');

events.on('pickUp', pickUp);

function pickUp (payload) {
  setInterval (() => {
    console.log(`DRIVER : picked up ${payload.orderId}`);
    events.emit('in-transit', payload);
  },1000);
  setInterval (() => {
    console.log(`DRIVER : delivered up ${payload.orderId}`);
    events.emit('delivered', payload);
  },3000);
}

module.exports = pickUp;
