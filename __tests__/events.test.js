'use strict';

const { afterEach, it, expect } = require('@jest/globals');
const events = require ('../events');

describe ('Event Test Working',() => {
  let consoleSpy;
  let result = {
    storeName : 'Sukina Flower',
    orderId :'ca900968-0607-4660-94a8-4c0e50c7d5c8',
    customer : 'Damon Halvorson',
    adress :'Gaithersburg',
  };
  beforeEach(() => {
    consoleSpy = jest.spyOn (console,'log').mockImplementation();

  });
  
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('PickUp Event Work', async () => {
    events.emit ('pickUp',result);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('inTransit Event Work', async () => {
    events.emit ('inTransit',result);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('delivered Event Work', async () => {
    events.emit ('delivered',result);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  

});