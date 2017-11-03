const {add, mul} = require('../src/math')
const {should,expect,assert} = require('chai')

/* 传统的 不用assert 
if(add(2,3) === 5){
    console.log('add(2,3)===5, ok');
    
}else{
    
    console.log('add(2,3)!==5, error');
} */

/**
 * node 内置的assert
 * const assert = require('assert')
assert.equal(add(2,3),5)
 */


 should()
 add(2,3).should.equal(5)

 expect(add(2,3)).to.be(5)

 assert.equal(add(2, 3), 5)