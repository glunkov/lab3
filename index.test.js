const reverseString = require('./index');

test('reverse of "hello" is "olleh"', () => {
    expect(reverseString("hello")).toBe("olleh");
});

test('reverse of "world" is "dlrow"', () => {
    expect(reverseString("world")).toBe("dlrow");
});
