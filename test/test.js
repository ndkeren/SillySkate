var expect = require('chai').expect;
var debt   = require('../debt');

describe('debt.add()', function () {
  it('should add debt record', function () {
		
	var res;
	
	// Set something
	// +100
	res = debt.add('TEST1', 'TEST2', 100);
	
	// -50
	res = debt.add('TEST2', 'TEST1', 50);
	
	// +100
	res = debt.add('TEST1', 'TEST2', 100);

    // Assert
    expect(res).to.be.equal(150);

  });
});

describe('debt.read()', function () {
  it('should read debt info', function () {
    
	var res;
	
	// +100
	debt.add('TEST1', 'TEST2', 100);
	
	// -50
	debt.add('TEST2', 'TEST1', 50);
	
	// +100
	debt.add('TEST1', 'TEST2', 100);
    // 2. ACT
    // Do something
	
	res = debt.read('TEST1');
	// console.log(res);
	
    // 3. ASSERT
    expect(res).to.deep.equal({ owe: { TEST1: 100 }, owed: { TEST1: 400 } });

  });
});


describe('debt.settle()', function () {
  it('should try to settle all debts between people', function () {
    
	// TODO::
	// Implement and test..
    expect(1).to.be.equal(1);

  });
});
