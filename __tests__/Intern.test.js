const Intern = require('../lib/Intern');

test('Acquires Employee properties', () => {
    const intern = new Intern('Abe', 123, 'abe@email.com');
    expect(intern.name).toBe('Abe');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});