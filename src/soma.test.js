const soma = require('./soma')

test('adds 1 + 2 to equal 3', () => {
    expect(soma(1,2)).toBe(3)
})