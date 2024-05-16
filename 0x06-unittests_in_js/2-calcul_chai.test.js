'use strict';
const calculateNumber = require('./1-calcul.js');
const expect = require('chai').expect;

describe('calculateNumber type == SUM', () => {
  it('checks the output', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 3.7, 1)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 4.5, 1.4)).to.equal(6);
    expect(calculateNumber('SUM', 0.0, 0)).to.equal(0);
    expect(calculateNumber('SUM', -1, 1)).to.equal(0);
    expect(calculateNumber('SUM', 1, -1)).to.equal(0);
    expect(calculateNumber('SUM', -1, -1)).to.equal(-2);
  });
});

describe('calculateNumber type == SUBTRACT', () => {
  it('checks the output', () => {
    expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 3.1, 2.5)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 4.5, 2)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 0.0, 5)).to.equal(-5);
    expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', -1.5, 0)).to.equal(-1);
  });
});

describe('calculateNumber type == DIVIDE', () => {
  it('check the output', () => {
    expect(calculateNumber('DIVIDE', 2, 2.5)).to.be.closeTo(0.6666666666666666, 0.0001);
    expect(calculateNumber('DIVIDE', 0.0, 2)).to.equal(0);
    expect(calculateNumber('DIVIDE', -1, 1)).to.equal(-1);
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
});
