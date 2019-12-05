const index = require('./');

describe('Roman Numerals', () => {
    it('Returns 1 for I', () => {
        expect(index('I')).toBe(1);
    })

    it('Returns 2 for II', () => {
        expect(index('II')).toBe(2);
    })
})
