const { add, mul, cover } = require('../src/math')
const { should, expect, assert } = require('chai')

describe('#math', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

describe('#math', () => {
    describe('add', () => {
        it('shoule return 2 when 2 + 3', () => {
            expect(add(2,3), 5)
        })
        it('shoule return -1 when 2 + -3', () => {
            expect(add(2, -3), -1)
        })
    })
    describe('mul', () => {
        it('shoule return 6 when 2 * 3', () => {
            expect(mul(2, 3), 6)
        })
    })
    describe('cover', () => {
        it('shoule return 1 when cover(2,1)', () => {
            expect(cover(2, 1), 6)
        })
        it('shoule return 3 when cover(1,2)', () => {
            expect(cover(1, 2)).to.equal(-1)
        })
        it('shoule return 4 when cover(2,2)', () => {
            expect(cover(2, 2)).to.equal(4)
        })
    })
})