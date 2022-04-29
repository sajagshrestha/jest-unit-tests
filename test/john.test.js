const calShortestTime = require('../src/john');

test('calShortestTime(4, 5, [1, 2, 3, 10]) needs to be 12 ', () => {
    expect(calShortestTime(4, 5, [1, 2, 3, 10])).toBe(12);
});

test('calShortestTime(0, 5, [1, 2, 3, 10]) needs to be 0', () => {
    expect(calShortestTime(0, 5, [1, 2, 3, 10])).toBe(0);
});

test('calShortestTime(4, 3, [2, 3, 4, 5]) needs to be 20', () => {
    expect(calShortestTime(4, 3, [2, 3, 4, 5])).toBe(20);
});

test('calShortestTime(7, 6, [3, 1, 1, 4]) needs to be 25', () => {
    expect(calShortestTime(7, 6, [3, 1, 1, 4])).toBe(25);
});
