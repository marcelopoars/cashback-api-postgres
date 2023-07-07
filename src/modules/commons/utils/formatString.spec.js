const formatString = require("./formatString")

describe(':: modules :: commons :: utils :: formatString', () => {
    it('should return a string in camelCase', () => {
        expect(formatString('foo')).toBe('FOO')
    })
})